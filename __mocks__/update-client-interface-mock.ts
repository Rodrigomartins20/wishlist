import { ClientModel } from '../src/domain/models/client-model'
import UpdateClientInterface from '../src/domain/usecases/update-client-interface'

export const mockUpdateClientInterface = (): UpdateClientInterface => {
  class UpdateClient implements UpdateClientInterface {
    async update (client: ClientModel): Promise<ClientModel> {
      return {
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }
    }
  }
  return new UpdateClient()
}