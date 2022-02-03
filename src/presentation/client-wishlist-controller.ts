import PostClientWishlistInterface from '@/domain/interfaces/post-client-wishlist-interface'
import Created from './responses/created'
import ServerError from './responses/server-error'
import HttpRequest from './types/http-request'
import HttpResponse from './types/http-response'

export default class ClientWishlistController {
  constructor (
    private readonly postClientWishlistUsecase: PostClientWishlistInterface
  ) {}

  async post(request: HttpRequest): Promise<HttpResponse> {
    try {
      const createdWishlist = await this.postClientWishlistUsecase.post({
        client: request.body.client,
        product: request.body.product
      })
      return Created({ ...createdWishlist })
    } catch (error) {
      return ServerError(error)
    }
  }
}