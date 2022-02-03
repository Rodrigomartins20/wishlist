import DbAllClientUsecase from '@/data/usecases/db-all-client-usecase'
import DbDeleteClientUsecase from '@/data/usecases/db-delete-client-usecase'
import DbFindClientUsecase from '@/data/usecases/db-find-client-usecase'
import DbPostClientUsecase from '@/data/usecases/db-post-client-usecase'
import DbUpdateClientUsecase from '@/data/usecases/db-update-client-usecase'
import ClientRepository from '@/infra/repositories/client-repository'
import ClientController from '@/presentation/client-controller'

const ClientControllerFactory = (): ClientController => {
  const clientRepository = new ClientRepository()

  const deleteClientUsecase = new DbDeleteClientUsecase(clientRepository)
  const postClientUsecase = new DbPostClientUsecase(clientRepository, clientRepository)
  const updateClientUsecase = new DbUpdateClientUsecase(clientRepository)
  const allClientUsecase = new DbAllClientUsecase(clientRepository)
  const findClientUsecase = new DbFindClientUsecase(clientRepository)

  return new ClientController(
    findClientUsecase,
    allClientUsecase,
    updateClientUsecase,
    postClientUsecase,
    deleteClientUsecase
  )
}

export default ClientControllerFactory;