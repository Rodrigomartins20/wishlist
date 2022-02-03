import ClientModel from '../../src/domain/models/client-model'
import AllClientInterface from '../../src/domain/interfaces/all-client-interface'
import makeFakeClient from '../objects/make-fake-client'

const mockAllClientInterface = (): AllClientInterface => {
  class AllClient implements AllClientInterface {
    async all (): Promise<ClientModel[]> {
      return new Promise(resolve => resolve([makeFakeClient()]))
    }
  }
  return new AllClient()
}

export default mockAllClientInterface