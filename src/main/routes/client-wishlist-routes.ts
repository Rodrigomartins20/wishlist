import { Express } from 'express'
import ClientWishlistControllerFactory from '../factories/client-wishlist-controller-factory'
import adaptRequest from '../adapters/request'
import adaptResponse from '../adapters/response'

export default (app: Express) => {
  const clientControllerWishlist = ClientWishlistControllerFactory()
  app.post('/wishlists', async (expressRequest, expressResponse) => {
    const controllerResponse = await clientControllerWishlist.post(adaptRequest(expressRequest))
    return adaptResponse(controllerResponse, expressResponse)
  });
}