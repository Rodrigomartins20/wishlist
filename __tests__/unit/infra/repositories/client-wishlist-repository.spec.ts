import dotenv from 'dotenv'
dotenv.config()

import ClientWishlistRepository from '../../../../src/infra/repositories/client-wishlist-repository'
import { sequelize, ClientWishlist } from '../../../../src/infra/sequelize/sequelize-helper'
import makeFakeClientWishlist from '../../../../__mocks__/objects/make-fake-client-wishlist'

describe('Client Wishlist Repository', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  describe('Post', () => {
    it('should post a clientWishlist', async () => {
      const sut = new ClientWishlistRepository()
      await sut.post(makeFakeClientWishlist())
      const clientWishlist = await ClientWishlist.findOne({ where: { id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7' } })
      expect(clientWishlist.getDataValue('id')).toEqual('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')
      expect(clientWishlist.getDataValue('client')).toEqual('b49ad762-b28a-4b63-808f-18584e8e7246')
      expect(clientWishlist.getDataValue('product')).toEqual('4703e6c6-ef8f-4763-94ea-ce66a5f1a9a7')
    })
  })
  describe('findWishlistByProductId', () => {
    it('should find a wishlist by product id', async () => {
      await ClientWishlist.create({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        client: 'b49ad762-b28a-4b63-808f-18584e8e7246',
        product: '4703e6c6-ef8f-4763-94ea-ce66a5f1a9a7'
      })
      const sut = new ClientWishlistRepository()
      const response = await sut.findWishlistByProductId('4703e6c6-ef8f-4763-94ea-ce66a5f1a9a7')
      expect(response).toEqual({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        client: 'b49ad762-b28a-4b63-808f-18584e8e7246',
        product: '4703e6c6-ef8f-4763-94ea-ce66a5f1a9a7'
      })
    })
    it('should return null if no wishlist by product id is found', async () => {
      const sut = new ClientWishlistRepository()
      const response = await sut.findWishlistByProductId('4703e6c6-ef8f-4763-94ea-ce66a5f1a9a7')
      expect(response).toBeNull()
    })
  })
})