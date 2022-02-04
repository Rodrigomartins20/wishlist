import request from 'supertest'
import app from '../../src/main/config/app'
import { Client, sequelize } from '../../src/infra/sequelize/sequelize-helper'
import makeFakeClient from '../../__mocks__/objects/make-fake-client'

describe('Duplicated Client', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  test('shouldnt create a duplicated client', async () => {
    await Client.create(makeFakeClient())
    await request(app)
      .post('/clients')
      .set('Authorization', 'Token 1234567890')
      .send({
        name: 'any name',
        email: 'any@mail.com'
      })
      .expect({
        message: 'oops, there was an error',
        error: 'email already in use'
      })
      .expect(500)
  })
})