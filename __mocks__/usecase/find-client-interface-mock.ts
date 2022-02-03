import { ClientModel } from '../../src/domain/models/client-model'
import FindClientInterface from '../../src/domain/usecases/find-client-interface'
import makeFakeClient from '../objects/make-fake-client'

export const mockFindClientInterface = (): FindClientInterface => {
  class FindClient implements FindClientInterface {
    async find (id: string): Promise<ClientModel> {
      return new Promise(resolve => resolve(makeFakeClient()))
    }
  }
  return new FindClient()
}