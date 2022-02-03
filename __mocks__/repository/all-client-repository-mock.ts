import { AllClientRepositoryInterface } from '../../src/data/protocols/db/all-client-repository-interface'
import { ClientModel } from '../../src/domain/models/client-model'
import makeFakeClient from '../objects/make-fake-client'

export const mockAllClientRepository = (): AllClientRepositoryInterface => {
  class AllClientRepository implements AllClientRepositoryInterface {
    async all (): Promise<ClientModel[]> {
      return new Promise(resolve => resolve([makeFakeClient()]))
    }
  }
  return new AllClientRepository()
}