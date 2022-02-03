import DeleteClientInterface from '../../src/domain/interfaces/delete-client-interface'

const mockDeleteClientInterface = (): DeleteClientInterface => {
  class DeleteClient implements DeleteClientInterface {
    async delete (id: string): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new DeleteClient()
}

export default mockDeleteClientInterface