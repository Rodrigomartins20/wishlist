import { AllClientRepository } from '../src/data/protocols/db/all-client-repository'
import { ClientModel } from '../src/domain/models/client-model'

export const mockAllClientRepository = (): AllClientRepository => {
  class AllClientRepository implements AllClientRepository {
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