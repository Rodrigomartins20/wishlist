import express from 'express'
import { ClientControllerFactory } from './factories/client-controller-factory'

const app = express()

const clientController = ClientControllerFactory()

app.post('/clients', async (req, res) => {
  await clientController.post(req)
})

app.listen(9000)

export default app