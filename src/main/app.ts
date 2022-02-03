import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(9000)

export default app