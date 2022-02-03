import { ClientModel } from '@/domain/models/client-model'
import { AllClientRepositoryInterface } from '@/data/protocols/db/all-client-repository-interface'
import AllClientInterface from '@/domain/usecases/all-client-interface'

export default class DbClientUsecase implements AllClientInterface {
  constructor (
    private readonly allClientRepository: AllClientRepositoryInterface
  ) {}
  async all(): Promise<ClientModel[]> {
    return await this.allClientRepository.all()
  }
}