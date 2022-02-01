import AllClientInterface from '@/domain/usecases/all-client-interface'
import FindClientInterface from '@/domain/usecases/find-client-interface'

export default class ClientController {
  constructor (
    private readonly findClient: FindClientInterface,
    private readonly allClient: AllClientInterface
  ) {}

  async find(id: string) {
    try {
      return await this.findClient.find(id)
    } catch (error) {
      return { message: 'oops', error: error.message }
    }
  }

  async all() {
    try {
      return await this.allClient.all()
    } catch (error) {
      return { message: 'oops', error: error.message }
    }
  }
}