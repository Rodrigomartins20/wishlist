import { ClientModel } from '../src/domain/models/client-model'
import AllClientInterface from '../src/domain/usecases/all-client-interface'

export const mockAllClientInterface = (): AllClientInterface => {
  class AllClient implements AllClientInterface {
    async all (): Promise<ClientModel[]> {
      return new Promise(resolve => resolve([{
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }]))
    }
  }
  return new AllClient()
}