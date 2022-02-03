import AllClientInterface from '@/domain/interfaces/all-client-interface'
import DeleteClientInterface from '@/domain/interfaces/delete-client-interface'
import FindClientInterface from '@/domain/interfaces/find-client-interface'
import PostClientInterface from '@/domain/interfaces/post-client-interface'
import UpdateClientInterface from '@/domain/interfaces/update-client-interface'

export default class ClientController {
  constructor (
    private readonly findClientUsecase: FindClientInterface,
    private readonly allClientUsecase: AllClientInterface,
    private readonly updateClientUsecase: UpdateClientInterface,
    private readonly postClientUsecase: PostClientInterface,
    private readonly deleteClientUsecase: DeleteClientInterface
  ) {}

  async find(id: string) {
    try {
      return await this.findClientUsecase.find(id)
    } catch (error) {
      return { message: 'oops', error: error.message }
    }
  }

  async all() {
    try {
      return await this.allClientUsecase.all()
    } catch (error) {
      return { message: 'oops', error: error.message }
    }
  }

  async update(client) {
    try {
      return await this.updateClientUsecase.update({
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
      return await this.postClientUsecase.post({
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
      await this.deleteClientUsecase.delete(id)
    } catch (error) {
      return { message: 'oops', error: error.message }
    }
  }
}