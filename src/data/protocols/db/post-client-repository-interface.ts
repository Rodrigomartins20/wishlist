import { ClientModel } from '@/domain/models/client-model'

export interface PostClientRepositoryInterface {
  post: (client: ClientModel) => Promise<ClientModel>
}