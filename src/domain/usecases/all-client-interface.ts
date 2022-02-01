import { ClientModel } from '../models/client-model'

export default interface AllClientInterface {
  all (): Promise<ClientModel[]>;
}