import FindClientRepositoryInterface from '../../src/data/interfaces/find-client-repository-interface'
import ClientModel from '../../src/domain/models/client-model'
import makeFakeClient from '../objects/make-fake-client'

export const mockFindClientRepository = (): FindClientRepositoryInterface => {
  class FindClientRepository implements FindClientRepositoryInterface {
    async find (id: string): Promise<ClientModel> {
      return new Promise(resolve => resolve(makeFakeClient()))
    }
  }
  return new FindClientRepository()
}