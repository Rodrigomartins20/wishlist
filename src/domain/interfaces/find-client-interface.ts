import ClientModel from '@/domain/models/client-model'

export default interface FindClientInterface {
  find (clientId: string): Promise<ClientModel>
}