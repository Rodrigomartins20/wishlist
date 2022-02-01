import { ClientModel } from '@/domain/models/client-model'

export interface FindClientRepositoryInterface {
  find: (id: string) => Promise<ClientModel>
}