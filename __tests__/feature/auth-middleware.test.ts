import request from 'supertest'
import app from '../../src/main/config/app'
import { sequelize } from '../../src/infra/sequelize/sequelize-helper'

describe('Auth Middleware', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  test('should return unauthorized', async () => {
    const response = await request(app).get('/clients')
    expect(response.status).toEqual(401)
    expect(response.body).toEqual({})
  })
  test('should return unauthorized[2]', async () => {
    const response = await request(app).get('/clients').set('Authorization', 'Bearer')
    expect(response.status).toEqual(401)
    expect(response.body).toEqual({})
  })
})