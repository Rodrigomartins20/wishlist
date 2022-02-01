import AllClientInterface from '@/domain/usecases/all-client-interface'
import FindClientInterface from '@/domain/usecases/find-client-interface'
import UpdateClientInterface from '@/domain/usecases/update-client-interface'

export default class ClientController {
  constructor (
    private readonly findClient: FindClientInterface,
    private readonly allClient: AllClientInterface,
    private readonly updateClient: UpdateClientInterface
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

  async update(client) {
    try {
      return await this.updateClient.update({
        id: client.id,
        name: client.name,
        email: client.email
      })
    } catch (error) {
      return { message: 'oops', error: error.message }
    }
  }
}