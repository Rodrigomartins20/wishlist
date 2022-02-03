import DeleteClientRepositoryInterface from '@/data/interfaces/delete-client-repository-interface'
import DeleteClientInterface from '@/domain/interfaces/delete-client-interface'

export default class DbDeleteClientUsecase implements DeleteClientInterface {
  constructor (
    private readonly deleteClientRepository: DeleteClientRepositoryInterface
  ) {}
  async delete(id: string): Promise<void> {
    await this.deleteClientRepository.delete(id)
  }
}