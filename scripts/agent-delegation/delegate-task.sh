#!/bin/bash
# Agent Task Delegation Script
# Usage: ./delegate-task.sh <task_type> "<task_description>" [priority]

TASK_TYPE=$1
TASK_DESCRIPTION=$2
PRIORITY=${3:-medium}

# Validate inputs
if [ -z "$TASK_TYPE" ] || [ -z "$TASK_DESCRIPTION" ]; then
    echo "Usage: $0 <task_type> \"<task_description>\" [priority]"
    echo "Task types: interface, data, posthog, linear"
    echo "Priority: low, medium, high (default: medium)"
    exit 1
fi

# Generate task ID
TASK_ID=$(uuidgen 2>/dev/null || python3 -c "import uuid; print(uuid.uuid4())" 2>/dev/null || echo "task-$(date +%s)")

# Create task JSON
TASK_JSON=$(cat << EOF
{
  "id": "$TASK_ID",
  "type": "$TASK_TYPE",
  "description": "$TASK_DESCRIPTION",
  "priority": "$PRIORITY",
  "status": "pending",
  "createdAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "source": "cursor-ide",
  "assignedAgent": "$TASK_TYPE-agent"
}
EOF
)

# Ensure tasks directory exists
mkdir -p /workspace/.agentic-tools-mcp/tasks

# Add to tasks.json
TASKS_FILE="/workspace/.agentic-tools-mcp/tasks/tasks.json"

if [ -f "$TASKS_FILE" ]; then
    # Add to existing tasks using Python (more reliable than jq)
    python3 -c "
import json
import sys

try:
    with open('$TASKS_FILE', 'r') as f:
        data = json.load(f)
    
    new_task = $TASK_JSON
    data['tasks'].append(new_task)
    
    with open('$TASKS_FILE', 'w') as f:
        json.dump(data, f, indent=2)
        
    print('Task added successfully')
except Exception as e:
    print(f'Error: {e}', file=sys.stderr)
    sys.exit(1)
"
else
    # Create new tasks file
    python3 -c "
import json

data = {
    'projects': [],
    'tasks': [$TASK_JSON],
    'subtasks': []
}

with open('$TASKS_FILE', 'w') as f:
    json.dump(data, f, indent=2)
    
print('New tasks file created')
"
fi

echo "✅ Task delegated successfully!"
echo "   Task ID: $TASK_ID"
echo "   Type: $TASK_TYPE"
echo "   Priority: $PRIORITY"
echo "   Description: $TASK_DESCRIPTION"
echo ""
echo "📊 Monitor progress at: http://localhost:3000/agent-dashboard"