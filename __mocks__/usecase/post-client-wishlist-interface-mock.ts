import PostClientWishlistInterface from '../../src/domain/interfaces/post-client-wishlist-interface'
import makeFakeClientWishlist from '../objects/make-fake-client-wishlist'
import ClientWishlistModel from '../../src/domain/models/client-wishlist-model'

type ClientWishlistData = Omit<ClientWishlistModel, 'id'>

const mockPostClientWishlistInterface = (): PostClientWishlistInterface => {
  class PostClientWishlist implements PostClientWishlistInterface {
    async post (request: ClientWishlistData): Promise<ClientWishlistModel> {
      return new Promise(resolve => resolve(makeFakeClientWishlist()))
    }
  }
  return new PostClientWishlist()
}

export default mockPostClientWishlistInterface