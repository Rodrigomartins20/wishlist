import ClientWishlistModel from '@/domain/models/client-wishlist-model'
import PostClientWishlistRepositoryInterface from '@/data/interfaces/post-client-wishlist-repository-interface'
import PostClientWishlistInterface from '@/domain/interfaces/post-client-wishlist-interface'
import FindProductByIdRepositoryInterface from '../interfaces/find-product-by-id-repository-interface'

export default class DbPostClientWishlistUsecase implements PostClientWishlistInterface {
  constructor (
    private readonly postClientWishlistRepository: PostClientWishlistRepositoryInterface,
    private readonly findProductByIdRepository: FindProductByIdRepositoryInterface
  ) {}
  async post(clientWishlist: ClientWishlistModel): Promise<ClientWishlistModel> {
    this.findProductByIdRepository.findProductById(clientWishlist.product)
    return this.postClientWishlistRepository.post(clientWishlist)
  }
}