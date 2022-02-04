import request from 'supertest'
import app from '../../src/main/config/app'
import { sequelize, Client } from '../../src/infra/sequelize/sequelize-helper'
import makeFakeClient from '../../__mocks__/objects/make-fake-client'

describe('Load All Clients', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  test('should load all the clients', async () => {
    const client = makeFakeClient()
    const client2 = {
      id: 'e227f195-3af4-4da1-9065-0bbfbdcbe711',
      name: 'any other name',
      email: 'any_other@mail.com'
    }
    await Client.bulkCreate([
      makeFakeClient(),
      client2
    ])
    const response = await request(app)
      .get('/clients/')
      .set('Authorization', 'Bearer 1234567890')
    expect(response.status).toEqual(200)
    expect(response.body).toEqual([
      client2,
      client
    ])
  })
})