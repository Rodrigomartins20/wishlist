import ClientWishlistModel from '@/domain/models/client-wishlist-model'

export default interface PostClientWishlistRepositoryInterface {
  post: (client: ClientWishlistModel) => Promise<ClientWishlistModel>
}