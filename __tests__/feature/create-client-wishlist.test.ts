import request from 'supertest'
import app from '../../src/main/config/app'
import { Client, sequelize } from '../../src/infra/sequelize/sequelize-helper'
import makeFakeClient from '../../__mocks__/objects/make-fake-client'

describe('Create Wishlist Client', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
    await Client.create(makeFakeClient())
  })
  afterAll(async () => {
    await sequelize.close()
  })
  test('should create a client wishlist', async () => {
    await request(app)
      .post('/wishlists')
      .send({
        client: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        product: '1bf0f365-fbdd-4e21-9786-da459d78dd1f'
      })
      .expect(201)
  })
  test('should not create a client wishlist if product doesnt exists', async () => {
    await request(app)
      .post('/wishlists')
      .send({
        client: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        product: 'any_wrong_hash'
      })
      .expect({
        message: 'oops, there was an error',
        error: 'product doesnt exists'
      })
      .expect(500)
  })
})