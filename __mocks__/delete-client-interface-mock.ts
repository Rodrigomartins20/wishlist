import DeleteClientInterface from '../src/domain/usecases/delete-client-interface'

export const mockDeleteClientInterface = (): DeleteClientInterface => {
  class DeleteClient implements DeleteClientInterface {
    async delete (id: string): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new DeleteClient()
}