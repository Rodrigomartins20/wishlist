import { ClientModel } from '@/domain/models/client-model'
import AllClientInterface from '@/domain/usecases/all-client-interface'
import { AllClientRepositoryInterface } from '@/data/protocols/db/all-client-repository-interface'
import FindClientInterface from '@/domain/usecases/find-client-interface'
import { FindClientRepositoryInterface } from '../protocols/db/find-client-repository-interface'

export class DbAllClientUsecase implements AllClientInterface, FindClientInterface {
  constructor (
    private readonly allClientRepository: AllClientRepositoryInterface,
    private readonly findClientRepository: FindClientRepositoryInterface
  ) {}
  async find(id: string): Promise<ClientModel> {
    return await this.findClientRepository.find(id)
  }
  async all(): Promise<ClientModel[]> {
    return await this.allClientRepository.all()
  }
}