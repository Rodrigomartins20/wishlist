import ClientModel from '@/domain/models/client-model'

export default interface AllClientRepositoryInterface {
  all: () => Promise<ClientModel[]>
}