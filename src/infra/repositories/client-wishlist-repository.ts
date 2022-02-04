import FindWishlistByProductIdRepositoryInterface from '@/data/interfaces/find-wishlist-by-product-id-repository-interface'
import PostClientWishlistInterface from '@/domain/interfaces/post-client-wishlist-interface'
import ClientWishlistModel from '@/domain/models/client-wishlist-model'
import { ClientWishlist, sequelize } from '../sequelize/sequelize-helper'

export default class ClientWishlistRepository implements PostClientWishlistInterface, FindWishlistByProductIdRepositoryInterface {
  async findWishlistByProductId (id: string): Promise<ClientWishlistModel> {
    await sequelize.sync()
    const wishlist = await ClientWishlist.findOne({ where: { product: id } })
    if (! wishlist) {
      return null
    }
    return {
      id: wishlist.getDataValue('id'),
      client: wishlist.getDataValue('client'),
      product: wishlist.getDataValue('product')
    }
  }
  async post (clientWishlist: ClientWishlistModel): Promise<ClientWishlistModel> {
    await sequelize.sync()
    await ClientWishlist.create({
      ...clientWishlist
    })
    return { ...clientWishlist }
  }
}