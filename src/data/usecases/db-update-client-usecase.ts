import ClientModel from '@/domain/models/client-model'
import UpdateClientRepositoryInterface from '@/data/interfaces/update-client-repository-interface'
import UpdateClientInterface from '@/domain/interfaces/update-client-interface'

export default class DbClientUsecase implements UpdateClientInterface {
  constructor (
    private readonly updateClientRepository: UpdateClientRepositoryInterface
  ) {}
  async update(client: ClientModel): Promise<ClientModel> {
    return this.updateClientRepository.update(client)
  }
}