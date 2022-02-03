import FindWishlistByProductIdRepositoryInterface from '../../src/data/interfaces/find-wishlist-by-product-id-repository-interface'
import ClientWishlistModel from '../../src/domain/models/client-wishlist-model'
import makeFakeClientWishlist from '../objects/make-fake-client-wishlist'

export const mockFindWishlistByProductIdRepository = (): FindWishlistByProductIdRepositoryInterface => {
  class FindWishlistByProductIdRepository implements FindWishlistByProductIdRepositoryInterface {
    async findWishlistByProductId (id: string): Promise<ClientWishlistModel> {
      return new Promise(resolve => resolve(makeFakeClientWishlist()))
    }
  }
  return new FindWishlistByProductIdRepository()
}