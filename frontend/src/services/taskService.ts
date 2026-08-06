import type { Task } from '../types/Task'

const tasksUrl = 'http://localhost:5001/api/tasks'

export async function fetchTasks(): Promise<Task[]> {
  const response = await fetch(tasksUrl)

  if (!response.ok) {
    throw new Error('Failed to fetch tasks')
  }

  return response.json() as Promise<Task[]>
}