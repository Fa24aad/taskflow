import cors from 'cors'
import express from 'express'
import healthRoutes from './routes/healthRoutes.js'
import taskRoutes from './routes/taskRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', healthRoutes)
app.use('/api', taskRoutes)

export default app