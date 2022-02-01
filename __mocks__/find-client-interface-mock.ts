import { ClientModel } from "../src/domain/models/client-model"
import FindClientInterface from "../src/domain/usecases/find-client-interface"

export const mockFindClientInterface = (): FindClientInterface => {
  class FindClient implements FindClientInterface {
    async find (id: string): Promise<ClientModel> {
      return new Promise(resolve => resolve({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }))
    }
  }
  return new FindClient()
}