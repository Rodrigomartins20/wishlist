import { ClientModel } from '../../src/domain/models/client-model'
import { UpdateClientRepositoryInterface } from '../../src/data/protocols/db/update-client-repository-interface'

export const mockUpdateClientRepository = (): UpdateClientRepositoryInterface => {
  class UpdateClientRepository implements UpdateClientRepositoryInterface {
    async update (client: ClientModel): Promise<ClientModel> {
      return new Promise(resolve => resolve({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }))
    }
  }
  return new UpdateClientRepository()
}