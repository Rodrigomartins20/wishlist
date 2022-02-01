import { ClientModel } from '@/domain/models/client-model'

export interface AllClientRepository {
  all: () => Promise<ClientModel[]>
}