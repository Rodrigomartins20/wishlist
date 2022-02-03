import { ClientModel } from '@/domain/models/client-model'
import { PostClientRepositoryInterface } from '@/data/protocols/db/post-client-repository-interface'
import PostClientInterface from '@/domain/usecases/post-client-interface'

export default class DbPostClientUsecase implements PostClientInterface {
  constructor (
    private readonly postClientRepository: PostClientRepositoryInterface
  ) {}
  async post(client: ClientModel): Promise<ClientModel> {
    return this.postClientRepository.post(client)
  }
}