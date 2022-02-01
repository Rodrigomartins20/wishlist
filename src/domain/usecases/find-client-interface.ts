import { ClientModel } from '../models/client-model'

export default interface FindClientInterface {
  find (id: string): ClientModel;
}