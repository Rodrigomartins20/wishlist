import ClientModel from '../models/client-model'

export default interface PostClientInterface {
  post (client: ClientModel): Promise<ClientModel>
}