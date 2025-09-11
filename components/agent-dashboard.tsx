'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RefreshCw, Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface AgentTask {
  id: string;
  type: string;
  description: string;
  priority: string;
  status: string;
  createdAt: string;
  source: string;
  assignedAgent?: string;
  updatedAt?: string;
  result?: any;
  updatedBy?: string;
}

interface TasksData {
  projects: any[];
  tasks: AgentTask[];
  subtasks: any[];
}

const AGENT_TYPES = [
  { id: 'interface', name: 'Interface Agent', color: 'bg-blue-100 text-blue-800' },
  { id: 'data', name: 'Data Agent', color: 'bg-green-100 text-green-800' },
  { id: 'posthog', name: 'PostHog Agent', color: 'bg-purple-100 text-purple-800' },
  { id: 'linear', name: 'Linear Agent', color: 'bg-orange-100 text-orange-800' },
];

const PRIORITY_COLORS = {
  low: 'bg-gray-100 text-gray-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

const STATUS_ICONS = {
  pending: <Clock className="h-4 w-4" />,
  in_progress: <RefreshCw className="h-4 w-4 animate-spin" />,
  completed: <CheckCircle className="h-4 w-4" />,
  failed: <AlertCircle className="h-4 w-4" />,
};

export function AgentDashboard() {
  const [tasks, setTasks] = useState<AgentTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/agent-tasks');
      const data: TasksData = await response.json();
      setTasks(data.tasks || []);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
    
    // Poll for updates every 5 seconds
    const interval = setInterval(fetchTasks, 5000);
    return () => clearInterval(interval);
  }, []);

  const getTasksByType = (type: string) => {
    return tasks.filter(task => task.type === type);
  };

  const getStatusCounts = (tasks: AgentTask[]) => {
    return tasks.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <RefreshCw className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading agent dashboard...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Agent Dashboard</h1>
          <p className="text-gray-600">
            Monitor and coordinate background agents
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            Last updated: {formatDate(lastUpdated.toISOString())}
          </span>
          <Button onClick={fetchTasks} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {AGENT_TYPES.map(agent => {
          const agentTasks = getTasksByType(agent.id);
          const statusCounts = getStatusCounts(agentTasks);
          
          return (
            <Card key={agent.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{agent.name}</CardTitle>
                <CardDescription>
                  {agentTasks.length} total tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {Object.entries(statusCounts).map(([status, count]) => (
                    <div key={status} className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-1">
                        {STATUS_ICONS[status as keyof typeof STATUS_ICONS]}
                        <span className="capitalize">{status.replace('_', ' ')}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Agent Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {AGENT_TYPES.map(agent => {
          const agentTasks = getTasksByType(agent.id);
          
          return (
            <Card key={agent.id}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge className={agent.color}>
                    {agent.name}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    ({agentTasks.length} tasks)
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {agentTasks.length === 0 ? (
                    <p className="text-sm text-gray-500 italic">
                      No tasks assigned to this agent
                    </p>
                  ) : (
                    agentTasks.map(task => (
                      <div key={task.id} className="border rounded-lg p-3 space-y-2">
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-medium">{task.description}</p>
                          <div className="flex items-center space-x-1">
                            {STATUS_ICONS[task.status as keyof typeof STATUS_ICONS]}
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${PRIORITY_COLORS[task.priority as keyof typeof PRIORITY_COLORS]}`}
                            >
                              {task.priority}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Created: {formatDate(task.createdAt)}</span>
                          {task.updatedAt && (
                            <span>Updated: {formatDate(task.updatedAt)}</span>
                          )}
                        </div>
                        
                        {task.result && (
                          <div className="text-xs bg-gray-50 p-2 rounded">
                            <strong>Result:</strong> {JSON.stringify(task.result)}
                          </div>
                        )}
                        
                        {task.updatedBy && (
                          <div className="text-xs text-gray-500">
                            Updated by: {task.updatedBy}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common task delegation commands for Cursor IDE
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Interface Agent</h4>
              <code className="block text-xs bg-gray-100 p-2 rounded">
                ./scripts/agent-delegation/delegate-task.sh interface "Update button styling" high
              </code>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Data Agent</h4>
              <code className="block text-xs bg-gray-100 p-2 rounded">
                ./scripts/agent-delegation/delegate-task.sh data "Create user API endpoint" high
              </code>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">PostHog Agent</h4>
              <code className="block text-xs bg-gray-100 p-2 rounded">
                ./scripts/agent-delegation/delegate-task.sh posthog "Create feature flag" medium
              </code>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Linear Agent</h4>
              <code className="block text-xs bg-gray-100 p-2 rounded">
                ./scripts/agent-delegation/delegate-task.sh linear "Create project issue" medium
              </code>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}