import ClientWishlistModel from '@/domain/models/client-wishlist-model';

export default interface FindWishlistByProductIdRepositoryInterface {
  findWishlistByProductId: (id: string) => Promise<ClientWishlistModel>
}