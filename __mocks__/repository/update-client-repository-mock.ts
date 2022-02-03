import ClientModel from '../../src/domain/models/client-model'
import UpdateClientRepositoryInterface from '../../src/data/interfaces/update-client-repository-interface'
import makeFakeClient from '../objects/make-fake-client'

export const mockUpdateClientRepository = (): UpdateClientRepositoryInterface => {
  class UpdateClientRepository implements UpdateClientRepositoryInterface {
    async update (client: ClientModel): Promise<ClientModel> {
      return new Promise(resolve => resolve(makeFakeClient()))
    }
  }
  return new UpdateClientRepository()
}