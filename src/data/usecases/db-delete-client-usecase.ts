import { DeleteClientRepositoryInterface } from '@/data/protocols/db/delete-client-repository-interface'
import DeleteClientInterface from '@/domain/usecases/delete-client-interface'

export default class DbDeleteClientUsecase implements DeleteClientInterface {
  constructor (
    private readonly deleteClientRepository: DeleteClientRepositoryInterface
  ) {}
  async delete(id: string): Promise<void> {
    await this.deleteClientRepository.delete(id)
  }
}