import DbFindClientUsecase from '../../../../src/data/usecases/db-find-client-usecase'
import FindClientRepositoryInterface from '../../../../src/data/interfaces/find-client-repository-interface'
import { mockFindClientRepository } from '../../../../__mocks__/repository/find-client-repository-mock'
import makeFakeClient from '../../../../__mocks__/objects/make-fake-client'

type SutTypes = {
  sut: DbFindClientUsecase
  findClientRepositoryStub: FindClientRepositoryInterface
}

const makeSut = (): SutTypes => {
  const findClientRepositoryStub = mockFindClientRepository()
  const sut = new DbFindClientUsecase(findClientRepositoryStub)
  return {
    sut,
    findClientRepositoryStub
  }
}

describe('Db All Client Usecase', () => {
  it('should call ClientRepository', async () => {
    const { sut, findClientRepositoryStub } = makeSut()
    const findClientRepositorySpy = jest.spyOn(findClientRepositoryStub, 'find')

    await sut.find('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')

    expect(findClientRepositorySpy).toHaveBeenCalledTimes(1)
  })

  it('should throw if ClientRepository throws', async () => {
    const { sut, findClientRepositoryStub } = makeSut()
    jest.spyOn(findClientRepositoryStub, 'find').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))

    const promise = sut.find('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')

    await expect(promise).rejects.toThrow()
  })

  it('should return ClientRepository values', async () => {
    const { sut } = makeSut()

    const response = await sut.find('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')

    expect(response).toEqual(makeFakeClient())
  })
})