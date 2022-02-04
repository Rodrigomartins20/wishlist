import request from 'supertest'
import app from '../../src/main/config/app'
import { sequelize } from '../../src/infra/sequelize/sequelize-helper'

describe('Create Client', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  test('should create a client', async () => {
    await request(app)
      .post('/clients')
      .set('Authorization', 'Token 1234567890')
      .send({
        name: 'any name',
        email: 'any@mail.com'
      })
      .expect(201)
  })
})