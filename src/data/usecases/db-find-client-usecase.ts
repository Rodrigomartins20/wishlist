import ClientModel from '@/domain/models/client-model'
import FindClientInterface from '@/domain/interfaces/find-client-interface'
import FindClientRepositoryInterface from '../interfaces/find-client-repository-interface'

export default class DbFindClientUsecase implements FindClientInterface {
  constructor (
    private readonly findClientRepository: FindClientRepositoryInterface
  ) {}
  async find(id: string): Promise<ClientModel> {
    return await this.findClientRepository.find(id)
  }
}