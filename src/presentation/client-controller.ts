import AllClientInterface from '@/domain/interfaces/all-client-interface'
import DeleteClientInterface from '@/domain/interfaces/delete-client-interface'
import FindClientInterface from '@/domain/interfaces/find-client-interface'
import PostClientInterface from '@/domain/interfaces/post-client-interface'
import UpdateClientInterface from '@/domain/interfaces/update-client-interface'

export default class ClientController {
  constructor (
    private readonly findClient: FindClientInterface,
    private readonly allClient: AllClientInterface,
    private readonly updateClient: UpdateClientInterface,
    private readonly postClient: PostClientInterface,
    private readonly deleteClient: DeleteClientInterface
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

  async post(client) {
    try {
      return await this.postClient.post({
        id: client.id,
        name: client.name,
        email: client.email
      })
    } catch (error) {
      return { message: 'oops', error: error.message }
    }
  }

  async delete(id) {
    try {
      await this.deleteClient.delete(id)
    } catch (error) {
      return { message: 'oops', error: error.message }
    }
  }
}