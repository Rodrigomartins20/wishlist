import ClientWishlistModel from '@/domain/models/client-wishlist-model'
import PostClientWishlistRepositoryInterface from '@/data/interfaces/post-client-wishlist-repository-interface'
import PostClientWishlistInterface from '@/domain/interfaces/post-client-wishlist-interface'
import FindProductByIdRepositoryInterface from '../interfaces/find-product-by-id-repository-interface'
import FindWishlistByProductIdRepositoryInterface from '../interfaces/find-wishlist-by-product-id-repository-interface'

export default class DbPostClientWishlistUsecase implements PostClientWishlistInterface {
  constructor (
    private readonly postClientWishlistRepository: PostClientWishlistRepositoryInterface,
    private readonly findProductByIdRepository: FindProductByIdRepositoryInterface, 
    private readonly findWishlistByProductIdRepository: FindWishlistByProductIdRepositoryInterface
  ) {}
  async post(clientWishlist: ClientWishlistModel): Promise<ClientWishlistModel> {
    const productExists = await this.findProductByIdRepository.findProductById(clientWishlist.product)
    if (! productExists) {
      throw new Error('product doesnt exists')
    }
    await this.findWishlistByProductIdRepository.findWishlistByProductId(clientWishlist.product)
    return this.postClientWishlistRepository.post(clientWishlist)
  }
}