import { useEffect, useState } from 'react'
import { fetchTasks } from '../services/taskService'
import type { Task } from '../types/Task'

function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    async function loadTasks() {
      try {
        const taskData = await fetchTasks()
        setTasks(taskData)
      } catch {
        setErrorMessage('Unable to load tasks. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    loadTasks()
  }, [])

  return (
    <section>
      <div>
        <p>Task dashboard</p>
        <h1>Manage your work in one place.</h1>
        <p>
          View upcoming tasks, track their progress and stay on top of your
          deadlines.
        </p>
      </div>

      {isLoading && <p>Loading tasks...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      {!isLoading && !errorMessage && (
        <div>
          {tasks.map((task) => (
            <article key={task.id}>
              <p>{task.status}</p>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default DashboardPage