import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const TASKS_FILE = path.join(process.cwd(), '.agentic-tools-mcp/tasks/tasks.json');

export async function GET() {
  try {
    if (!fs.existsSync(TASKS_FILE)) {
      return NextResponse.json({ projects: [], tasks: [], subtasks: [] });
    }
    
    const tasksData = JSON.parse(fs.readFileSync(TASKS_FILE, 'utf8'));
    return NextResponse.json(tasksData);
  } catch (error) {
    console.error('Error reading tasks:', error);
    return NextResponse.json({ error: 'Failed to read tasks' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Ensure tasks directory exists
    const tasksDir = path.dirname(TASKS_FILE);
    if (!fs.existsSync(tasksDir)) {
      fs.mkdirSync(tasksDir, { recursive: true });
    }
    
    let tasksData = { projects: [], tasks: [], subtasks: [] };
    if (fs.existsSync(TASKS_FILE)) {
      tasksData = JSON.parse(fs.readFileSync(TASKS_FILE, 'utf8'));
    }
    
    const newTask = {
      ...body,
      id: body.id || crypto.randomUUID(),
      createdAt: body.createdAt || new Date().toISOString(),
      status: body.status || 'pending',
    };
    
    tasksData.tasks.push(newTask);
    
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasksData, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      taskId: newTask.id,
      message: 'Task created successfully' 
    });
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { taskId, status, result, updatedBy } = body;
    
    if (!fs.existsSync(TASKS_FILE)) {
      return NextResponse.json({ error: 'Tasks file not found' }, { status: 404 });
    }
    
    const tasksData = JSON.parse(fs.readFileSync(TASKS_FILE, 'utf8'));
    const taskIndex = tasksData.tasks.findIndex((task: any) => task.id === taskId);
    
    if (taskIndex === -1) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    
    // Update task
    tasksData.tasks[taskIndex].status = status;
    tasksData.tasks[taskIndex].updatedAt = new Date().toISOString();
    if (result) {
      tasksData.tasks[taskIndex].result = result;
    }
    if (updatedBy) {
      tasksData.tasks[taskIndex].updatedBy = updatedBy;
    }
    
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasksData, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Task updated successfully' 
    });
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
  }
}