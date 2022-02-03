import ClientModel from '@/domain/models/client-model'
import PostClientRepositoryInterface from '@/data/interfaces/post-client-repository-interface'
import PostClientInterface from '@/domain/interfaces/post-client-interface'

export default class DbPostClientUsecase implements PostClientInterface {
  constructor (
    private readonly postClientRepository: PostClientRepositoryInterface
  ) {}
  async post(client: ClientModel): Promise<ClientModel> {
    return this.postClientRepository.post(client)
  }
}