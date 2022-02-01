import { AllClientRepositoryInterface } from '../../src/data/protocols/db/all-client-repository-interface'
import { ClientModel } from '../../src/domain/models/client-model'

export const mockAllClientRepository = (): AllClientRepositoryInterface => {
  class AllClientRepository implements AllClientRepositoryInterface {
    async all (): Promise<ClientModel[]> {
      return new Promise(resolve => resolve([{
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }]))
    }
  }
  return new AllClientRepository()
}