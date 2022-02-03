import FindWishlistByProductIdRepositoryInterface from '../../src/data/interfaces/find-wishlist-by-product-id-repository-interface'
import ClientWishlistModel from '../../src/domain/models/client-wishlist-model'

export const mockFindWishlistByProductIdRepository = (): FindWishlistByProductIdRepositoryInterface => {
  class FindWishlistByProductIdRepository implements FindWishlistByProductIdRepositoryInterface {
    async findWishlistByProductId (id: string): Promise<ClientWishlistModel> {
      return new Promise(resolve => resolve(null))
    }
  }
  return new FindWishlistByProductIdRepository()
}