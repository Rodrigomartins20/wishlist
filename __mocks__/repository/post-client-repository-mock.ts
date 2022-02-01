import { ClientModel } from '../../src/domain/models/client-model'
import { PostClientRepositoryInterface } from '../../src/data/protocols/db/post-client-repository-interface'

export const mockPostClientRepository = (): PostClientRepositoryInterface => {
  class PostClientRepository implements PostClientRepositoryInterface {
    async post (client: ClientModel): Promise<ClientModel> {
      return new Promise(resolve => resolve({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }))
    }
  }
  return new PostClientRepository()
}