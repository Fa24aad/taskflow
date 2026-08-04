export type TaskStatus = 'To Do' | 'In Progress' | 'Completed'

export interface Task {
  id: number
  title: string
  description: string
  status: TaskStatus
  dueDate: string
  createdAt: string
}