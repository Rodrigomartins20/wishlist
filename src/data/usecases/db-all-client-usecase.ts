import { ClientModel } from '@/domain/models/client-model'
import { AllClientRepositoryInterface } from '@/data/protocols/db/all-client-repository-interface'
import { FindClientRepositoryInterface } from '../protocols/db/find-client-repository-interface'
import { DeleteClientRepositoryInterface } from '../protocols/db/delete-client-repository-interface'
import { PostClientRepositoryInterface } from '../protocols/db/post-client-repository-interface'
import AllClientInterface from '@/domain/usecases/all-client-interface'
import FindClientInterface from '@/domain/usecases/find-client-interface'
import DeleteClientInterface from '@/domain/usecases/delete-client-interface'
import PostClientInterface from '@/domain/usecases/post-client-interface'

export class DbAllClientUsecase implements AllClientInterface, FindClientInterface, DeleteClientInterface, PostClientInterface {
  constructor (
    private readonly allClientRepository: AllClientRepositoryInterface,
    private readonly findClientRepository: FindClientRepositoryInterface,
    private readonly deleteClientRepository: DeleteClientRepositoryInterface,
    private readonly postClientRepository: PostClientRepositoryInterface,
  ) {}
  async post(client: ClientModel): Promise<ClientModel> {
    return this.postClientRepository.post(client)
  }
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