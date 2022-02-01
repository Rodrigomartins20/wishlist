import { ClientModel } from '@/domain/models/client-model'
import AllClientInterface from '@/domain/usecases/all-client-interface'
import { AllClientRepositoryInterface } from '@/data/protocols/db/all-client-repository-interface'
import FindClientInterface from '@/domain/usecases/find-client-interface'
import { FindClientRepositoryInterface } from '../protocols/db/find-client-repository-interface'
import { DeleteClientRepositoryInterface } from '../protocols/db/delete-client-repository-interface'
import DeleteClientInterface from '@/domain/usecases/delete-client-interface'

export class DbAllClientUsecase implements AllClientInterface, FindClientInterface, DeleteClientInterface {
  constructor (
    private readonly allClientRepository: AllClientRepositoryInterface,
    private readonly findClientRepository: FindClientRepositoryInterface,
    private readonly deleteClientRepository: DeleteClientRepositoryInterface
  ) {}
  async delete(id: string): Promise<void> {
    await this.deleteClientRepository.delete(id)
  }
  async find(id: string): Promise<ClientModel> {
    return await this.findClientRepository.find(id)
  }
  async all(): Promise<ClientModel[]> {
    return await this.allClientRepository.all()
  }
}