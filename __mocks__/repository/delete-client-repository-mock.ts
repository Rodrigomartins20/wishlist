import DeleteClientRepositoryInterface from '../../src/data/interfaces/delete-client-repository-interface'
import DeleteClientInterface from '../../src/domain/interfaces/delete-client-interface'

export const mockDeleteClientRepository = (): DeleteClientInterface => {
  class DeleteClientRepository implements DeleteClientRepositoryInterface {
    async delete (id: string): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new DeleteClientRepository()
}