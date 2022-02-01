import { FindClientRepositoryInterface } from '../../src/data/protocols/db/find-client-repository-interface'
import { ClientModel } from '../../src/domain/models/client-model'

export const mockFindClientRepository = (): FindClientRepositoryInterface => {
  class FindClientRepository implements FindClientRepositoryInterface {
    async find (id: string): Promise<ClientModel> {
      return new Promise(resolve => resolve({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }))
    }
  }
  return new FindClientRepository()
}