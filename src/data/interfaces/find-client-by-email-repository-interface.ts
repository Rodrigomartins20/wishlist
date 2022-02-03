import ClientModel from '@/domain/models/client-model'

export default interface FindClientByEmailRepositoryInterface {
  findClientByEmail: (email: string) => Promise<ClientModel>
}