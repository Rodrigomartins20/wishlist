import DbPostClientUsecase from '../../../../src/data/usecases/db-post-client-usecase'
import PostClientRepositoryInterface from '../../../../src/data/interfaces/post-client-repository-interface'
import FindClientByEmailRepositoryInterface from '../../../../src/data/interfaces/find-client-by-email-repository-interface'
import { mockPostClientRepository } from '../../../../__mocks__/repository/post-client-repository-mock'
import { mockFindClientByEmailRepository } from '../../../../__mocks__/repository/find-client-by-email-repository-mock'
import makeFakeClient from '../../../../__mocks__/objects/make-fake-client'

type SutTypes = {
  sut: DbPostClientUsecase
  postClientRepositoryStub: PostClientRepositoryInterface
  findClientByEmailRepositoryStub: FindClientByEmailRepositoryInterface
}

const makeSut = (): SutTypes => {
  const findClientByEmailRepositoryStub = mockFindClientByEmailRepository()
  const postClientRepositoryStub = mockPostClientRepository()
  const sut = new DbPostClientUsecase(postClientRepositoryStub, findClientByEmailRepositoryStub)
  return {
    sut,
    postClientRepositoryStub,
    findClientByEmailRepositoryStub
  }
}

describe('Db All Client Usecase', () => {
  it('should call FindClientByEmailRepository with correct values', async () => {
    const { sut, findClientByEmailRepositoryStub } = makeSut()
    const findClientByEmailRepositorySpy = jest.spyOn(findClientByEmailRepositoryStub, 'findClientByEmail')
    await sut.post(makeFakeClient())
    expect(findClientByEmailRepositorySpy).toHaveBeenCalledWith('any@mail.com')
  })
  it('should call ClientRepository', async () => {
    const { sut, postClientRepositoryStub } = makeSut()
    const postClientRepositorySpy = jest.spyOn(postClientRepositoryStub, 'post')
    await sut.post(makeFakeClient())
    expect(postClientRepositorySpy).toHaveBeenCalledTimes(1)
  })
  it('should throw if ClientRepository throws', async () => {
    const { sut, postClientRepositoryStub } = makeSut()
    jest.spyOn(postClientRepositoryStub, 'post').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))
    const promise = sut.post(makeFakeClient())
    await expect(promise).rejects.toThrow()
  })
  it('should return ClientRepository values', async () => {
    const { sut } = makeSut()
    const response = await sut.post(makeFakeClient())
    expect(response).toEqual(makeFakeClient())
  })
})