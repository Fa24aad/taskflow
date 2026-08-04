import type { Task } from '../models/Task.js'

export const sampleTasks: Task[] = [
  {
    id: 1,
    title: 'Finish React project',
    description: 'Complete the TaskFlow frontend.',
    status: 'In Progress',
    dueDate: '2026-08-10',
    createdAt: '2026-08-04',
  },
  {
    id: 2,
    title: 'Apply for graduate jobs',
    description: 'Submit five software engineering applications.',
    status: 'To Do',
    dueDate: '2026-08-12',
    createdAt: '2026-08-04',
  },
]