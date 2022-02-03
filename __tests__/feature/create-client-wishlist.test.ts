import request from 'supertest'
import app from '../../src/main/config/app'
import { sequelize } from '../../src/infra/sequelize/sequelize-helper'

describe('Create Wishlist Client', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  test('should create a client wishlist', async () => {
    await request(app)
      .post('/wishlists')
      .send({
        client: 'b49ad762-b28a-4b63-808f-18584e8e7246',
        product: '1bf0f365-fbdd-4e21-9786-da459d78dd1f'
      })
      .expect(201)
  })
  test('should not create a client wishlist if product doesnt exists', async () => {
    await request(app)
      .post('/wishlists')
      .send({
        client: 'b49ad762-b28a-4b63-808f-18584e8e7246',
        product: 'any_wrong_hash'
      })
      .expect({
        message: 'oops, there was an error',
        error: 'product doesnt exists'
      })
      .expect(500)
  })
})