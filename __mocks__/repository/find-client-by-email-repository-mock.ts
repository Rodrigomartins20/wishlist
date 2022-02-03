import FindClientByEmailRepositoryInterface from '../../src/data/interfaces/find-client-by-email-repository-interface'
import ClientModel from '../../src/domain/models/client-model'

export const mockFindClientByEmailRepository = (): FindClientByEmailRepositoryInterface => {
  class FindClientByEmailRepository implements FindClientByEmailRepositoryInterface {
    async findClientByEmail (email: string): Promise<ClientModel> {
      return new Promise(resolve => resolve(null))
    }
  }
  return new FindClientByEmailRepository()
}