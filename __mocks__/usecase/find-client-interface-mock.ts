import ClientModel from '../../src/domain/models/client-model'
import FindClientInterface from '../../src/domain/interfaces/find-client-interface'
import makeFakeClient from '../objects/make-fake-client'

const mockFindClientInterface = (): FindClientInterface => {
  class FindClient implements FindClientInterface {
    async find (clientId: string): Promise<ClientModel> {
      return new Promise(resolve => resolve(makeFakeClient()))
    }
  }
  return new FindClient()
}

export default mockFindClientInterface