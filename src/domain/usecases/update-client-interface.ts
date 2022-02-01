import { ClientModel } from '../models/client-model'

export default interface UpdateClientInterface {
  update (client: ClientModel): Promise<ClientModel>
}