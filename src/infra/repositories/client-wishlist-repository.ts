import PostClientWishlistInterface from '@/domain/interfaces/post-client-wishlist-interface'
import ClientWishlistModel from '@/domain/models/client-wishlist-model'
import { ClientWishlist, sequelize } from '../sequelize/sequelize-helper'

export default class ClientRepository implements PostClientWishlistInterface {
  async post (clientWishlist: ClientWishlistModel): Promise<ClientWishlistModel> {
    await sequelize.sync()
    await ClientWishlist.create({
      ...clientWishlist
    })
    return { ...clientWishlist }
  }
}