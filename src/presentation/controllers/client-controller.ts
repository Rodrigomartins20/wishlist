import FindClientInterface from '@/domain/usecases/find-client-interface'

export default class ClientController {
  constructor (private readonly findClient: FindClientInterface) {}

  async find(id: string) {
    try {
      return await this.findClient.find(id)
    } catch (error) {
      return { message: 'oops', error: error.message }
    }
  }
}