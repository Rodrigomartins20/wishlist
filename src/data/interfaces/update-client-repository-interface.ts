import ClientModel from '@/domain/models/client-model'

export default interface UpdateClientRepositoryInterface {
  update: (client: ClientModel) => Promise<ClientModel>
}