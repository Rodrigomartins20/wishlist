import { DbAllClientUsecase } from '../../../src/data/usecases/db-all-client-usecase'
import { AllClientRepositoryInterface } from '../../../src/data/protocols/db/all-client-repository-interface'
import { FindClientRepositoryInterface } from '../../../src/data/protocols/db/find-client-repository-interface'
import { DeleteClientRepositoryInterface } from '../../../src/data/protocols/db/delete-client-repository-interface'
import { PostClientRepositoryInterface } from '../../../src/data/protocols/db/post-client-repository-interface'
import { mockAllClientRepository } from '../../../__mocks__/all-client-repository-mock'
import { mockFindClientRepository } from '../../../__mocks__/find-client-repository-mock'
import { mockDeleteClientRepository } from '../../../__mocks__/delete-client-repository-mock'
import { mockPostClientRepository } from '../../../__mocks__/post-client-repository-mock'

type SutTypes = {
  sut: DbAllClientUsecase,
  allClientRepositoryStub: AllClientRepositoryInterface
  findClientRepositoryStub: FindClientRepositoryInterface
  deleteClientRepositoryStub: DeleteClientRepositoryInterface
  postClientRepositoryStub: PostClientRepositoryInterface
}

const makeSut = (): SutTypes => {
  const postClientRepositoryStub = mockPostClientRepository()
  const deleteClientRepositoryStub = mockDeleteClientRepository()
  const findClientRepositoryStub = mockFindClientRepository()
  const allClientRepositoryStub = mockAllClientRepository()
  const sut = new DbAllClientUsecase(
    allClientRepositoryStub,
    findClientRepositoryStub,
    deleteClientRepositoryStub,
    postClientRepositoryStub
  )
  return {
    sut,
    allClientRepositoryStub,
    findClientRepositoryStub,
    deleteClientRepositoryStub,
    postClientRepositoryStub
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

    it('should throw if ClientRepository throws', async () => {
      const { sut, allClientRepositoryStub } = makeSut()
      jest.spyOn(allClientRepositoryStub, 'all').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))

      const promise = sut.all()

      await expect(promise).rejects.toThrow()
    })

    it('should return ClientRepository values', async () => {
      const { sut } = makeSut()

      const response = await sut.all()

      expect(response).toEqual([{
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }])
    })
  })

  describe('Find', () => {
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

      expect(response).toEqual({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })
    })
  })

  describe('Delete', () => {
    it('should call ClientRepository', async () => {
      const { sut, deleteClientRepositoryStub } = makeSut()
      const deleteClientRepositorySpy = jest.spyOn(deleteClientRepositoryStub, 'delete')

      await sut.delete('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')

      expect(deleteClientRepositorySpy).toHaveBeenCalledTimes(1)
    })

    it('should throw if ClientRepository throws', async () => {
      const { sut, deleteClientRepositoryStub } = makeSut()
      jest.spyOn(deleteClientRepositoryStub, 'delete').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))

      const promise = sut.delete('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')

      await expect(promise).rejects.toThrow()
    })
  })

  describe('Post', () => {
    it('should call ClientRepository', async () => {
      const { sut, postClientRepositoryStub } = makeSut()
      const postClientRepositorySpy = jest.spyOn(postClientRepositoryStub, 'post')

      await sut.post({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })

      expect(postClientRepositorySpy).toHaveBeenCalledTimes(1)
    })

    it('should throw if ClientRepository throws', async () => {
      const { sut, postClientRepositoryStub } = makeSut()
      jest.spyOn(postClientRepositoryStub, 'post').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))

      const promise = sut.post({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })

      await expect(promise).rejects.toThrow()
    })

    it('should return ClientRepository values', async () => {
      const { sut } = makeSut()

      const response = await sut.post({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })

      expect(response).toEqual({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })
    })
  })
})