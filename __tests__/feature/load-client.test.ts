import request from 'supertest'
import app from '../../src/main/config/app'
import { sequelize, Client } from '../../src/infra/sequelize/sequelize-helper'
import makeFakeClient from '../../__mocks__/objects/make-fake-client'

describe('Load Client', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  test('should load the client', async () => {
    const client = makeFakeClient()
    await Client.create(client)
    const response = await request(app).get(`/clients/${client.id}`)
    expect(response.status).toEqual(200)
    expect(response.body.name).toEqual(client.name)
    expect(response.body.email).toEqual(client.email)
  })
})