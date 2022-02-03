import ClientModel from '@/domain/models/client-model'

export default interface PostClientRepositoryInterface {
  post: (client: ClientModel) => Promise<ClientModel>
}