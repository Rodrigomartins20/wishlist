import ClientModel from '@/domain/models/client-model'
import PostClientRepositoryInterface from '@/data/interfaces/post-client-repository-interface'
import PostClientInterface from '@/domain/interfaces/post-client-interface'
import FindClientByEmailRepositoryInterface from '../interfaces/find-client-by-email-repository-interface'

export default class DbPostClientUsecase implements PostClientInterface {
  constructor (
    private readonly postClientRepository: PostClientRepositoryInterface,
    private readonly findClientByEmail: FindClientByEmailRepositoryInterface
  ) {}
  async post(client: ClientModel): Promise<ClientModel> {
    const isEmailAlreadyInUse = await this.findClientByEmail.findClientByEmail(client.email)
    if (isEmailAlreadyInUse) {
      throw new Error('email already in use')
    }
    return this.postClientRepository.post(client)
  }
}