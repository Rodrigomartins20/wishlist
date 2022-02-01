import { ClientModel } from '@/domain/models/client-model'

export interface AllClientRepositoryInterface {
  all: () => Promise<ClientModel[]>
}