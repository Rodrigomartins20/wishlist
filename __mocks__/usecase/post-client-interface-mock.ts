import ClientModel from '../../src/domain/models/client-model'
import PostClientInterface from '../../src/domain/interfaces/post-client-interface'
import makeFakeClient from '../objects/make-fake-client'

export const mockPostClientInterface = (): PostClientInterface => {
  class PostClient implements PostClientInterface {
    async post (client: ClientModel): Promise<ClientModel> {
      return new Promise(resolve => resolve(makeFakeClient()))
    }
  }
  return new PostClient()
}