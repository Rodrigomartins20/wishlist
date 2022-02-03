import DbUpdateClientUsecase from '../../../../src/data/usecases/db-update-client-usecase'
import UpdateClientRepositoryInterface from '../../../../src/data/interfaces/update-client-repository-interface'
import { mockUpdateClientRepository } from '../../../../__mocks__/repository/update-client-repository-mock'
import makeFakeClient from '../../../../__mocks__/objects/make-fake-client'

type SutTypes = {
  sut: DbUpdateClientUsecase
  updateClientRepositoryStub: UpdateClientRepositoryInterface
}

const makeSut = (): SutTypes => {
  const updateClientRepositoryStub = mockUpdateClientRepository()
  const sut = new DbUpdateClientUsecase(updateClientRepositoryStub)
  return {
    sut,
    updateClientRepositoryStub
  }
}

describe('Db Update Client Usecase', () => {
  it('should call ClientRepository', async () => {
    const { sut, updateClientRepositoryStub } = makeSut()
    const updateClientRepositorySpy = jest.spyOn(updateClientRepositoryStub, 'update')
    await sut.update(makeFakeClient())
    expect(updateClientRepositorySpy).toHaveBeenCalledTimes(1)
  })
  it('should throw if ClientRepository throws', async () => {
    const { sut, updateClientRepositoryStub } = makeSut()
    jest.spyOn(updateClientRepositoryStub, 'update').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))
    const promise = sut.update(makeFakeClient())
    await expect(promise).rejects.toThrow()
  })
  it('should return ClientRepository values', async () => {
    const { sut } = makeSut()
    const response = await sut.update(makeFakeClient())
    expect(response).toEqual(makeFakeClient())
  })
})