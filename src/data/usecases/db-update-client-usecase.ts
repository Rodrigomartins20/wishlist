import { ClientModel } from '@/domain/models/client-model'
import { UpdateClientRepositoryInterface } from '@/data/protocols/db/update-client-repository-interface'
import UpdateClientInterface from '@/domain/usecases/update-client-interface'

export default class DbClientUsecase implements UpdateClientInterface {
  constructor (
    private readonly updateClientRepository: UpdateClientRepositoryInterface
  ) {}
  async update(client: ClientModel): Promise<ClientModel> {
    return this.updateClientRepository.update(client)
  }
}