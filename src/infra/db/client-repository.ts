import { AllClientRepositoryInterface } from '@/data/protocols/db/all-client-repository-interface'
import { DeleteClientRepositoryInterface } from '@/data/protocols/db/delete-client-repository-interface'
import { FindClientRepositoryInterface } from '@/data/protocols/db/find-client-repository-interface'
import { PostClientRepositoryInterface } from '@/data/protocols/db/post-client-repository-interface'
import { UpdateClientRepositoryInterface } from '@/data/protocols/db/update-client-repository-interface'
import { ClientModel } from '@/domain/models/client-model'

export class ClientRepository implements AllClientRepositoryInterface, FindClientRepositoryInterface, UpdateClientRepositoryInterface, PostClientRepositoryInterface, DeleteClientRepositoryInterface {
  all: () => Promise<ClientModel[]>;
  find: (id: string) => Promise<ClientModel>;
  update: (client: ClientModel) => Promise<ClientModel>;
  post: (client: ClientModel) => Promise<ClientModel>;
  delete: (id: string) => Promise<void>;
}