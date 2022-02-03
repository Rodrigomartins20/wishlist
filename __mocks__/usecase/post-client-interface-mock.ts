import ClientModel from '../../src/domain/models/client-model'
import PostClientInterface from '../../src/domain/interfaces/post-client-interface'
import makeFakeClient from '../objects/make-fake-client'

type ClientData = Omit<ClientModel, 'id'>

const mockPostClientInterface = (): PostClientInterface => {
  class PostClient implements PostClientInterface {
    async post (request: ClientData): Promise<ClientModel> {
      return new Promise(resolve => resolve(makeFakeClient()))
    }
  }
  return new PostClient()
}

export default mockPostClientInterface