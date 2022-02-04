import dotenv from 'dotenv'
import express from 'express'
import authMiddleware from '../middleware/auth-middleware'
import setupRoutes from './routes'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(authMiddleware)
setupRoutes(app)
export default app