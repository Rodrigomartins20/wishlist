import { AllClientRepositoryInterface } from '@/data/protocols/db/all-client-repository-interface'
import { DeleteClientRepositoryInterface } from '@/data/protocols/db/delete-client-repository-interface'
import { FindClientRepositoryInterface } from '@/data/protocols/db/find-client-repository-interface'
import { PostClientRepositoryInterface } from '@/data/protocols/db/post-client-repository-interface'
import { UpdateClientRepositoryInterface } from '@/data/protocols/db/update-client-repository-interface'
import { ClientModel } from '@/domain/models/client-model'
import { Client, sequelize } from '../sequelize/sequelize-helper'

export class ClientRepository implements AllClientRepositoryInterface, FindClientRepositoryInterface, UpdateClientRepositoryInterface, PostClientRepositoryInterface, DeleteClientRepositoryInterface {
  all: () => Promise<ClientModel[]>;
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
  delete: (id: string) => Promise<void>;
}