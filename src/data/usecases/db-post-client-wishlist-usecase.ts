import ClientWishlistModel from '@/domain/models/client-wishlist-model'
import PostClientWishlistRepositoryInterface from '@/data/interfaces/post-client-wishlist-repository-interface'
import PostClientWishlistInterface from '@/domain/interfaces/post-client-wishlist-interface'

export default class DbPostClientWishlistUsecase implements PostClientWishlistInterface {
  constructor (
    private readonly postClientWishlistRepository: PostClientWishlistRepositoryInterface
  ) {}
  async post(clientWishlist: ClientWishlistModel): Promise<ClientWishlistModel> {
    return this.postClientWishlistRepository.post(clientWishlist)
  }
}