import ClientModel from '@/domain/models/client-model'

export default interface FindClientRepositoryInterface {
  find: (id: string) => Promise<ClientModel>
}