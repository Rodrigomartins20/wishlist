import ClientModel from '@/domain/models/client-model'

type ClientData = Omit<ClientModel, 'id'>

export default interface PostClientInterface {
  post (request: ClientData): Promise<ClientModel>
}