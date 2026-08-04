import { Router } from 'express'
import { sampleTasks } from '../data/sampleTasks.js'

const router = Router()

router.get('/tasks', (_req, res) => {
  res.json(sampleTasks)
})

export default router