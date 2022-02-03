import ClientWishlistModel from '../../src/domain/models/client-wishlist-model'
import PostClientWishlistRepositoryInterface from '../../src/data/interfaces/post-client-wishlist-repository-interface'
import makeFakeClientWishlist from '../objects/make-fake-client-wishlist'

export const mockPostClientWishlistRepository = (): PostClientWishlistRepositoryInterface => {
  class PostClientWishlistRepository implements PostClientWishlistRepositoryInterface {
    async post (client: ClientWishlistModel): Promise<ClientWishlistModel> {
      return new Promise(resolve => resolve(makeFakeClientWishlist()))
    }
  }
  return new PostClientWishlistRepository()
}