import { Express } from 'express'
import ClientControllerFactory from '../factories/client-controller-factory'
import adaptRequest from '../adapters/request'
import adaptResponse from '../adapters/response'

export default (app: Express) => {
  const clientController = ClientControllerFactory()
  app.post('/clients', async (expressRequest, expressResponse) => {
    const controllerResponse = await clientController.post(adaptRequest(expressRequest))
    return adaptResponse(controllerResponse, expressResponse)
  });
  app.get('/clients/:id', async (expressRequest, expressResponse) => {
    const controllerResponse = await clientController.find(adaptRequest(expressRequest))
    return adaptResponse(controllerResponse, expressResponse)
  });
  app.put('/clients/:id', async (expressRequest, expressResponse) => {
    const controllerResponse = await clientController.update(adaptRequest(expressRequest))
    return adaptResponse(controllerResponse, expressResponse)
  });
}