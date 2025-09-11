# Agent Delegation Setup Guide

## Overview
This guide shows how to set up automatic task delegation from Cursor IDE to background agents in the web interface.

## 1. Cursor IDE Configuration

### A. Create Agent Delegation Scripts
```bash
# Create delegation scripts directory
mkdir -p /workspace/scripts/agent-delegation

# Create task delegation script
cat > /workspace/scripts/agent-delegation/delegate-task.sh << 'EOF'
#!/bin/bash
# Agent Task Delegation Script

TASK_TYPE=$1
TASK_DESCRIPTION=$2
PRIORITY=${3:-medium}

# Create task in agentic-tools-mcp
TASK_ID=$(uuidgen)
TASK_JSON=$(cat << EOF
{
  "id": "$TASK_ID",
  "type": "$TASK_TYPE",
  "description": "$TASK_DESCRIPTION",
  "priority": "$PRIORITY",
  "status": "pending",
  "createdAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "source": "cursor-ide"
}
EOF
)

# Add to tasks.json
jq ".tasks += [$TASK_JSON]" /workspace/.agentic-tools-mcp/tasks/tasks.json > /tmp/tasks.json
mv /tmp/tasks.json /workspace/.agentic-tools-mcp/tasks/tasks.json

echo "Task delegated: $TASK_ID"
EOF

chmod +x /workspace/scripts/agent-delegation/delegate-task.sh
```

### B. Cursor IDE Integration
Add to your Cursor settings or create a custom command:

```json
{
  "commands": [
    {
      "name": "Delegate UI Task",
      "command": "/workspace/scripts/agent-delegation/delegate-task.sh interface \"$1\" high",
      "description": "Delegate UI/UX task to Interface Agent"
    },
    {
      "name": "Delegate Data Task", 
      "command": "/workspace/scripts/agent-delegation/delegate-task.sh data \"$1\" high",
      "description": "Delegate data task to Data Agent"
    },
    {
      "name": "Delegate PostHog Task",
      "command": "/workspace/scripts/agent-delegation/delegate-task.sh posthog \"$1\" medium",
      "description": "Delegate PostHog task to PostHog Agent"
    },
    {
      "name": "Delegate Linear Task",
      "command": "/workspace/scripts/agent-delegation/delegate-task.sh linear \"$1\" medium",
      "description": "Delegate Linear task to Linear Agent"
    }
  ]
}
```

## 2. Web Interface Agent Monitoring

### A. Create Agent Dashboard
```typescript
// components/agent-dashboard.tsx
import { useState, useEffect } from 'react';

interface AgentTask {
  id: string;
  type: string;
  description: string;
  priority: string;
  status: string;
  createdAt: string;
  source: string;
}

export function AgentDashboard() {
  const [tasks, setTasks] = useState<AgentTask[]>([]);
  const [activeAgents, setActiveAgents] = useState<string[]>([]);

  useEffect(() => {
    // Poll for new tasks
    const interval = setInterval(async () => {
      const response = await fetch('/api/agent-tasks');
      const data = await response.json();
      setTasks(data.tasks);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {['interface', 'data', 'posthog', 'linear'].map(agentType => (
        <div key={agentType} className="border rounded-lg p-4">
          <h3 className="font-semibold capitalize">{agentType} Agent</h3>
          <div className="mt-2">
            {tasks
              .filter(task => task.type === agentType)
              .map(task => (
                <div key={task.id} className="text-sm p-2 bg-gray-100 rounded mb-1">
                  <div className="font-medium">{task.description}</div>
                  <div className="text-gray-600">Status: {task.status}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

### B. API Route for Task Management
```typescript
// app/api/agent-tasks/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const tasksPath = path.join(process.cwd(), '.agentic-tools-mcp/tasks/tasks.json');
    const tasksData = JSON.parse(fs.readFileSync(tasksPath, 'utf8'));
    return NextResponse.json(tasksData);
  } catch (error) {
    return NextResponse.json({ tasks: [] });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const tasksPath = path.join(process.cwd(), '.agentic-tools-mcp/tasks/tasks.json');
    
    let tasksData = { tasks: [] };
    if (fs.existsSync(tasksPath)) {
      tasksData = JSON.parse(fs.readFileSync(tasksPath, 'utf8'));
    }
    
    tasksData.tasks.push({
      ...body,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });
    
    fs.writeFileSync(tasksPath, JSON.stringify(tasksData, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}
```

## 3. Agent Communication Protocol

### A. Task Status Updates
```typescript
// lib/agent-communication.ts
export class AgentCommunication {
  static async updateTaskStatus(taskId: string, status: string, result?: any) {
    const tasksPath = path.join(process.cwd(), '.agentic-tools-mcp/tasks/tasks.json');
    const tasksData = JSON.parse(fs.readFileSync(tasksPath, 'utf8'));
    
    const taskIndex = tasksData.tasks.findIndex((task: any) => task.id === taskId);
    if (taskIndex !== -1) {
      tasksData.tasks[taskIndex].status = status;
      tasksData.tasks[taskIndex].updatedAt = new Date().toISOString();
      if (result) {
        tasksData.tasks[taskIndex].result = result;
      }
      
      fs.writeFileSync(tasksPath, JSON.stringify(tasksData, null, 2));
    }
  }
  
  static async notifyCursor(taskId: string, message: string) {
    // Send notification back to Cursor IDE
    console.log(`[AGENT-${taskId}] ${message}`);
  }
}
```

## 4. Usage Examples

### From Cursor IDE:
```bash
# Delegate UI task
./scripts/agent-delegation/delegate-task.sh interface "Update button component styling" high

# Delegate data task  
./scripts/agent-delegation/delegate-task.sh data "Create new API endpoint for user profiles" high

# Delegate PostHog task
./scripts/agent-delegation/delegate-task.sh posthog "Create feature flag for new dashboard" medium
```

### From Web Interface:
- Monitor task progress in real-time
- Review agent decisions and outcomes
- Manually create tasks for specific agents
- View agent performance metrics

## 5. Benefits

1. **Separation of Concerns**: Cursor for development, web interface for agent coordination
2. **Automated Delegation**: Seamless task handoff from IDE to agents
3. **Real-time Monitoring**: Track agent progress and outcomes
4. **Scalable**: Easy to add new agents and task types
5. **Audit Trail**: Complete history of agent decisions and actions

## Next Steps

1. Implement the delegation scripts
2. Create the web interface dashboard
3. Test the workflow with sample tasks
4. Integrate with PostHog for decision tracking
5. Add Linear integration for project management