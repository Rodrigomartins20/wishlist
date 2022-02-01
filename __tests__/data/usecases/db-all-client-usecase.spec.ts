import { DbAllClientUsecase } from '../../../src/data/usecases/db-all-client-usecase'
import { AllClientRepository } from '../../../src/data/protocols/db/all-client-repository'
import { mockAllClientRepository } from '../../../__mocks__/all-client-repository-mock'

type SutTypes = {
  sut: DbAllClientUsecase,
  allClientRepositoryStub: AllClientRepository
}

const makeSut = (): SutTypes => {
  const allClientRepositoryStub = mockAllClientRepository()
  const sut = new DbAllClientUsecase(allClientRepositoryStub)
  return {
    sut,
    allClientRepositoryStub,
  }
}

describe('Db All Client Usecase', () => {
  describe('All', () => {
    it('should call ClientRepository', async () => {
      const { sut, allClientRepositoryStub } = makeSut()
      const allClientRepositorySpy = jest.spyOn(allClientRepositoryStub, 'all')

      await sut.all()

      expect(allClientRepositorySpy).toHaveBeenCalledTimes(1)
    })
  })
})