import { ClientModel } from '../../src/domain/models/client-model'
import { PostClientRepositoryInterface } from '../../src/data/protocols/db/post-client-repository-interface'
import makeFakeClient from '../objects/make-fake-client'

export const mockPostClientRepository = (): PostClientRepositoryInterface => {
  class PostClientRepository implements PostClientRepositoryInterface {
    async post (client: ClientModel): Promise<ClientModel> {
      return new Promise(resolve => resolve(makeFakeClient()))
    }
  }
  return new PostClientRepository()
}