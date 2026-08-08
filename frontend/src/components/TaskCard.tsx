import type { Task } from '../types/Task'

interface TaskCardProps {
  task: Task
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <article>
      <p>{task.status}</p>

      <h2>{task.title}</h2>

      <p>{task.description}</p>

      <p>Due: {task.dueDate}</p>
    </article>
  )
}

export default TaskCard