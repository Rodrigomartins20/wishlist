import dotenv from 'dotenv'
import express from 'express'
import setupRoutes from './routes'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
setupRoutes(app)
export default app