import FindClientInterface from '@/domain/usecases/find-client-interface'

export default class ClientController {
  constructor (private readonly findClient: FindClientInterface) {}

  async find(id: string) {
    this.findClient.find(id)
  }
}