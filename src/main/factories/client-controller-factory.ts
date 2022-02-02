import DbClientUsecase from '../../data/usecases/db-client-usecase'
import { ClientRepository } from '../../infra/db/repositories/client-repository'
import ClientController from '../../presentation/controllers/client-controller'

export const ClientControllerFactory = () => {
  const clientRepository = new ClientRepository()
  const clientUsecase = new DbClientUsecase(clientRepository, clientRepository, clientRepository, clientRepository, clientRepository)
  return new ClientController(clientUsecase, clientUsecase, clientUsecase, clientUsecase, clientUsecase)
}