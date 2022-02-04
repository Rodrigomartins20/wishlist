import dotenv from 'dotenv'
dotenv.config()

import ClientRepository from '../../../../src/infra/repositories/client-repository'
import { sequelize, Client } from '../../../../src/infra/sequelize/sequelize-helper'
import makeFakeClient from '../../../../__mocks__/objects/make-fake-client'

describe('Client Repository', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close()
  })
  describe('All', () => {
    it('should return all clients', async () => {
      await Client.bulkCreate([makeFakeClient(), {
        id: '167f49ac-5bbc-4e01-8685-07a245462ef9',
        name: 'other name',
        email: 'other@mail.com'
      }])
      const sut = new ClientRepository()
      const response = await sut.all()
      expect(response).toEqual([{
        id: '167f49ac-5bbc-4e01-8685-07a245462ef9',
        name: 'other name',
        email: 'other@mail.com'
      }, makeFakeClient()])
    })
  })
  describe('Find', () => {
    it('should find a client', async () => {
      await Client.create(makeFakeClient())
      const sut = new ClientRepository()
      const response = await sut.find('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')
      expect(response).toEqual(makeFakeClient())
    })
    it('should return null if no client is found', async () => {
      const sut = new ClientRepository()
      const response = await sut.find('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')
      expect(response).toBeNull()
    })
  })
  describe('FindByEmail', () => {
    it('should find a client by email', async () => {
      await Client.create(makeFakeClient())
      const sut = new ClientRepository()
      const response = await sut.findClientByEmail('any@mail.com')
      expect(response).toEqual(makeFakeClient())
    })
    it('should return null if no client is found by email', async () => {
      const sut = new ClientRepository()
      const response = await sut.findClientByEmail('any@mail.com')
      expect(response).toEqual(null)
    })
  })
  describe('Update', () => {
    it('should update a client', async () => {
      await Client.create(makeFakeClient())
      const sut = new ClientRepository()
      await sut.update({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any other name',
        email: 'any_other@mail.com'
      })
      const client = await Client.findOne({ where: { id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7' } })
      expect(client.getDataValue('id')).toEqual('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')
      expect(client.getDataValue('name')).toEqual('any other name')
      expect(client.getDataValue('email')).toEqual('any_other@mail.com')
    })
  })
  describe('Post', () => {
    it('should post a client', async () => {
      const sut = new ClientRepository()
      await sut.post(makeFakeClient())
      const client = await Client.findOne({ where: { id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7' } })
      expect(client.getDataValue('id')).toEqual('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')
      expect(client.getDataValue('name')).toEqual('any name')
      expect(client.getDataValue('email')).toEqual('any@mail.com')
    })
  })
  describe('Delete', () => {
    it('should delete a client', async () => {
      await Client.create(makeFakeClient())
      const sut = new ClientRepository()
      await sut.delete('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')
      const client = await Client.findOne({ where: { id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7' } })
      expect(client).toEqual(null)
    })
  })
})