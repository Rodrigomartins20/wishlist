import ClientModel from '../../src/domain/models/client-model'
import UpdateClientInterface from '../../src/domain/interfaces/update-client-interface'
import makeFakeClient from '../objects/make-fake-client'

export const mockUpdateClientInterface = (): UpdateClientInterface => {
  class UpdateClient implements UpdateClientInterface {
    async update (client: ClientModel): Promise<ClientModel> {
      return new Promise(resolve => resolve(makeFakeClient()))
    }
  }
  return new UpdateClient()
}