import ClientModel from '@/domain/models/client-model'

export default interface UpdateClientInterface {
  update (clientData: ClientModel): Promise<ClientModel>
}