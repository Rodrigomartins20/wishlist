import request from 'supertest'
import app from '../../src/main/config/app'
import { sequelize, Client } from '../../src/infra/sequelize/sequelize-helper'
import makeFakeClient from '../../__mocks__/objects/make-fake-client'

describe('Delete Client', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  test('should delete the client', async () => {
    const client = makeFakeClient()
    await Client.create(client)
    const response = await request(app).delete(`/clients/${client.id}`)
    expect(response.status).toEqual(202)
    const deletedClient = await Client.findOne({ where: { id: client.id }})
    expect(deletedClient).toBeFalsy()
  })
})