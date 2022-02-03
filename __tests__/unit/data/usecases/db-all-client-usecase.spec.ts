import DbAllClientUsecase from '../../../../src/data/usecases/db-all-client-usecase'
import AllClientRepositoryInterface  from '../../../../src/data/interfaces/all-client-repository-interface'
import { mockAllClientRepository } from '../../../../__mocks__/repository/all-client-repository-mock'
import makeFakeClient from '../../../../__mocks__/objects/make-fake-client'

type SutTypes = {
  sut: DbAllClientUsecase,
  allClientRepositoryStub: AllClientRepositoryInterface
}

const makeSut = (): SutTypes => {
  const allClientRepositoryStub = mockAllClientRepository()
  const sut = new DbAllClientUsecase(
    allClientRepositoryStub
  )
  return {
    sut,
    allClientRepositoryStub
  }
}

describe('Db All Client Usecase', () => {
  it('should call ClientRepository', async () => {
    const { sut, allClientRepositoryStub } = makeSut()
    const allClientRepositorySpy = jest.spyOn(allClientRepositoryStub, 'all')

    await sut.all()

    expect(allClientRepositorySpy).toHaveBeenCalledTimes(1)
  })

  it('should throw if ClientRepository throws', async () => {
    const { sut, allClientRepositoryStub } = makeSut()
    jest.spyOn(allClientRepositoryStub, 'all').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))

    const promise = sut.all()

    await expect(promise).rejects.toThrow()
  })

  it('should return ClientRepository values', async () => {
    const { sut } = makeSut()

    const response = await sut.all()

    expect(response).toEqual([makeFakeClient()])
  })
})