import dotenv from 'dotenv'
dotenv.config()

import { ClientRepository } from '../../../../src/infra/db/repositories/client-repository'
import { sequelize, Client } from '../../../../src/infra/db/sequelize/sequelize-helper'

describe('Client Repository', () => {
  beforeAll(async () => {
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
})