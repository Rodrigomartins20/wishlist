import request from 'supertest'
import app from '../../src/main/config/app'
import { sequelize, Client } from '../../src/infra/sequelize/sequelize-helper'
import makeFakeClient from '../../__mocks__/objects/make-fake-client'

describe('Update Client', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  test('should update the client', async () => {
    const client = makeFakeClient()
    await Client.create(client)
    const response = await request(app)
      .put(`/clients/${client.id}`)
      .send({
        name: 'other name'
      })
    expect(response.status).toEqual(202)
    expect(response.body.name).toEqual('other name')
    const updatedClient = await Client.findOne({ where: { id: client.id }})
    expect(updatedClient.getDataValue('name')).toEqual('other name')
  })
})