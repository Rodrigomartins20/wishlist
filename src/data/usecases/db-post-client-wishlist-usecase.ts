import ClientWishlistModel from '@/domain/models/client-wishlist-model'
import PostClientWishlistRepositoryInterface from '@/data/interfaces/post-client-wishlist-repository-interface'
import PostClientWishlistInterface from '@/domain/interfaces/post-client-wishlist-interface'
import FindProductByIdRepositoryInterface from '../interfaces/find-product-by-id-repository-interface'
import FindWishlistByProductIdRepositoryInterface from '../interfaces/find-wishlist-by-product-id-repository-interface'
import FindClientRepositoryInterface from '../interfaces/find-client-repository-interface'

export default class DbPostClientWishlistUsecase implements PostClientWishlistInterface {
  constructor (
    private readonly postClientWishlistRepository: PostClientWishlistRepositoryInterface,
    private readonly findProductByIdRepository: FindProductByIdRepositoryInterface, 
    private readonly findWishlistByProductIdRepository: FindWishlistByProductIdRepositoryInterface,
    private readonly findClientRepositoryInterface: FindClientRepositoryInterface
  ) {}
  async post(clientWishlist: ClientWishlistModel): Promise<ClientWishlistModel> {
    await this.findClientRepositoryInterface.find(clientWishlist.client)
    const productExists = await this.findProductByIdRepository.findProductById(clientWishlist.product)
    if (! productExists) {
      throw new Error('product doesnt exists')
    }
    const productAlreadyOnWishlist = await this.findWishlistByProductIdRepository.findWishlistByProductId(clientWishlist.product)
    if (productAlreadyOnWishlist) {
      throw new Error('product already on client wishlist')
    }
    return this.postClientWishlistRepository.post(clientWishlist)
  }
}