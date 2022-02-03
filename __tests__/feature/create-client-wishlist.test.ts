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
        product: '4703e6c6-ef8f-4763-94ea-ce66a5f1a9a7'
      })
      .expect(201)
  })
})