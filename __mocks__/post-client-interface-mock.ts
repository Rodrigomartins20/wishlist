import { ClientModel } from '../src/domain/models/client-model'
import PostClientInterface from '../src/domain/usecases/post-client-interface'

export const mockPostClientInterface = (): PostClientInterface => {
  class PostClient implements PostClientInterface {
    async post (client: ClientModel): Promise<ClientModel> {
      return {
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }
    }
  }
  return new PostClient()
}