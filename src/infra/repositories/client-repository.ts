import AllClientRepositoryInterface  from '@/data/interfaces/all-client-repository-interface'
import DeleteClientRepositoryInterface from '@/data/interfaces/delete-client-repository-interface'
import FindClientByEmailRepositoryInterface from '@/data/interfaces/find-client-by-email-repository-interface'
import FindClientRepositoryInterface from '@/data/interfaces/find-client-repository-interface'
import PostClientRepositoryInterface from '@/data/interfaces/post-client-repository-interface'
import UpdateClientRepositoryInterface from '@/data/interfaces/update-client-repository-interface'
import ClientModel from '@/domain/models/client-model'
import { Client, sequelize } from '../sequelize/sequelize-helper'

export default class ClientRepository implements
  AllClientRepositoryInterface,
  FindClientRepositoryInterface,
  UpdateClientRepositoryInterface,
  PostClientRepositoryInterface,
  DeleteClientRepositoryInterface,
  FindClientByEmailRepositoryInterface
{
  async all (): Promise<ClientModel[]> {
    await sequelize.sync()
    return (await Client.findAll( { attributes: ['id', 'name', 'email' ]})).map(client => ({
      id: client.getDataValue('id'),
      name: client.getDataValue('name'),
      email: client.getDataValue('email')
    }))
  }
  async find (id: string): Promise<ClientModel> {
    await sequelize.sync()
    const client: Client = await Client.findOne({
      where: { id }
    })
    return {
      id,
      name: client.getDataValue('name'),
      email: client.getDataValue('email')
    }
  }
  async findClientByEmail (email: string): Promise<ClientModel> {
    await sequelize.sync()
    const client: Client = await Client.findOne({
      where: { email }
    })
    if (! client) {
      return null
    }
    return {
      id: client.getDataValue('id'),
      name: client.getDataValue('name'),
      email: client.getDataValue('email')
    }
  }
  async update (client: ClientModel): Promise<ClientModel> {
    await sequelize.sync()
    await Client.update({
      ...client
    }, { where: { id: client.id } })
    return { ...client }
  }
  async post (client: ClientModel): Promise<ClientModel> {
    await sequelize.sync()
    await Client.create({
      ...client
    })
    return { ...client }
  }
  async delete (id: string): Promise<void> {
    await sequelize.sync()
    await Client.destroy({ where: { id } })
  }
}