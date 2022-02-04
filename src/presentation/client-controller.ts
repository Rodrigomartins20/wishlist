import AllClientInterface from '@/domain/interfaces/all-client-interface'
import DeleteClientInterface from '@/domain/interfaces/delete-client-interface'
import FindClientInterface from '@/domain/interfaces/find-client-interface'
import PostClientInterface from '@/domain/interfaces/post-client-interface'
import UpdateClientInterface from '@/domain/interfaces/update-client-interface'
import HttpRequest from './types/http-request'
import HttpResponse from './types/http-response'
import Accepted from './responses/accepted'
import Created from './responses/created'
import Ok from './responses/ok'
import ServerError from './responses/server-error'
import NotFound from './responses/not-found'

export default class ClientController {
  constructor (
    private readonly findClientUsecase: FindClientInterface,
    private readonly allClientUsecase: AllClientInterface,
    private readonly updateClientUsecase: UpdateClientInterface,
    private readonly postClientUsecase: PostClientInterface,
    private readonly deleteClientUsecase: DeleteClientInterface
  ) {}

  async find(request: HttpRequest): Promise<HttpResponse> {
    try {
      const client = await this.findClientUsecase.find(request.body.id)
      if (! client) {
        return NotFound({})
      }
      return Ok(client)
    } catch (error) {
      return ServerError(error)
    }
  }

  async all(request: HttpRequest): Promise<HttpResponse> {
    try {
      const clients = await this.allClientUsecase.all()
      return Ok(clients)
    } catch (error) {
      return ServerError(error)
    }
  }

  async update(request: HttpRequest): Promise<HttpResponse> {
    try {
      const updatedClient = await this.updateClientUsecase.update({
        id: request.body.id,
        name: request.body.name,
        email: request.body.email
      })
      return Accepted({ ...updatedClient })
    } catch (error) {
      return ServerError(error)
    }
  }

  async post(request: HttpRequest): Promise<HttpResponse> {
    try {
      const createdClient = await this.postClientUsecase.post({
        name: request.body.name,
        email: request.body.email
      })
      return Created({ ...createdClient })
    } catch (error) {
      return ServerError(error)
    }
  }

  async delete(request: HttpRequest): Promise<HttpResponse> {
    try {
      await this.deleteClientUsecase.delete(request.body.id)
      return Accepted({})
    } catch (error) {
      return ServerError(error)
    }
  }
}