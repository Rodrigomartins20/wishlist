import ClientModel from '@/domain/models/client-model'

export default interface AllClientInterface {
  all (): Promise<ClientModel[]>
}