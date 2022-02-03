import ClientWishlistModel from '../models/client-wishlist-model'

type ClientWishlistData = Omit<ClientWishlistModel, 'id'>

export default interface PostClientWishlistInterface {
  post (request: ClientWishlistData): Promise<ClientWishlistModel>
}