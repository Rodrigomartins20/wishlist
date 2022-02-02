import dotenv from 'dotenv'
dotenv.config()

import { ClientRepository } from '../../../../src/infra/db/repositories/client-repository'
import { sequelize, Client } from '../../../../src/infra/db/sequelize/sequelize-helper'

describe('Client Repository', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  describe('Find', () => {
    it('should find a client', async () => {
      await Client.create({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })
      const sut = new ClientRepository()

      const response = await sut.find('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')

      expect(response).toEqual({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })
    })
  })
  describe('Update', () => {
    it('should update a client', async () => {
      await Client.create({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })
      const sut = new ClientRepository()

      const response = await sut.update({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any other name',
        email: 'any_other@mail.com'
      })

      expect(response).toEqual({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any other name',
        email: 'any_other@mail.com'
      })
    })
  })
  describe('Post', () => {
    it('should post a client', async () => {
      const sut = new ClientRepository()

      await sut.post({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })

      const client = await Client.findOne({ where: { id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7' } })

      expect(client.getDataValue('id')).toEqual('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')
      expect(client.getDataValue('name')).toEqual('any name')
      expect(client.getDataValue('email')).toEqual('any@mail.com')
    })
  })
})