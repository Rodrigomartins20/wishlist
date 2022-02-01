import { ClientModel } from '@/domain/models/client-model'

export interface UpdateClientRepositoryInterface {
  update: (client: ClientModel) => Promise<ClientModel>
}