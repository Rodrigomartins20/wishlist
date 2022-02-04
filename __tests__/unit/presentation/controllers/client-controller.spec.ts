import AllClientInterface from '../../../../src/domain/interfaces/all-client-interface'
import FindClientInterface from '../../../../src/domain/interfaces/find-client-interface'
import UpdateClientInterface from '../../../../src/domain/interfaces/update-client-interface'
import PostClientInterface from '../../../../src/domain/interfaces/post-client-interface'
import DeleteClientInterface from '../../../../src/domain/interfaces/delete-client-interface'
import ClientController from '../../../../src/presentation/client-controller'
import mockUpdateClientInterface from '../../../../__mocks__/usecase/update-client-interface-mock'
import mockAllClientInterface from '../../../../__mocks__/usecase/all-client-interface-mock'
import mockFindClientInterface from '../../../../__mocks__/usecase/find-client-interface-mock'
import mockPostClientInterface from '../../../../__mocks__/usecase/post-client-interface-mock'
import mockDeleteClientInterface from '../../../../__mocks__/usecase/delete-client-interface-mock'
import makeFakeClient from '../../../../__mocks__/objects/make-fake-client'

type SutTypes = {
  sut: ClientController
  findClientStub: FindClientInterface
  allClientStub: AllClientInterface
  updateClientStub: UpdateClientInterface
  postClientStub: PostClientInterface
  deleteClientStub: DeleteClientInterface
}

const makeSut = (): SutTypes => {
  const deleteClientStub = mockDeleteClientInterface()
  const postClientStub = mockPostClientInterface()
  const updateClientStub = mockUpdateClientInterface()
  const allClientStub = mockAllClientInterface()
  const findClientStub = mockFindClientInterface()
  const sut = new ClientController(
    findClientStub,
    allClientStub,
    updateClientStub,
    postClientStub,
    deleteClientStub
  )
  return {
    sut,
    findClientStub,
    allClientStub,
    updateClientStub,
    postClientStub,
    deleteClientStub
  }
}

describe('Client Controller', () => {
  describe('find()', () => {
    it('should call FindClient with correct values', async () => {
      const { sut, findClientStub } = makeSut()
      const findClientSpy = jest.spyOn(findClientStub, 'find')
      await sut.find({ body: { id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7' } })
      expect(findClientSpy).toHaveBeenCalledWith('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')
    })
    it('should return FindClient values', async () => {
      const { sut } = makeSut()
      const response = await sut.find({ body: { id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7' } })
      expect(response).toEqual({
        statusCode: 200,
        body: {
          ...makeFakeClient()
        }
      })
    })
    it('should return not found if FindClient returns null', async () => {
      const { sut, findClientStub } = makeSut()
      jest.spyOn(findClientStub, 'find').mockReturnValueOnce(new Promise(resolve => resolve(null)))
      const response = await sut.find({ body: { id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7' } })
      expect(response).toEqual({
        statusCode: 404,
        body: {}
      })
    })
    it('should return an error if FindClient throws', async () => {
      const { sut, findClientStub } = makeSut()
      jest.spyOn(findClientStub, 'find').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))
      const response = await sut.find({ body: { id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7' } })
      expect(response).toEqual({
        statusCode: 500,
        body: {
          message: 'oops, there was an error',
          error: 'any message'
        }
      })
    })
  })
  describe('all()', () => {
    it('should call AllClient with correct values', async () => {
      const { sut, allClientStub } = makeSut()
      const allClientSpy = jest.spyOn(allClientStub, 'all')
      await sut.all({})
      expect(allClientSpy).toHaveBeenCalledTimes(1)
    })
    it('should return AllClient values', async () => {
      const { sut } = makeSut()
      const response = await sut.all({})
      expect(response).toEqual({
        statusCode: 200,
        body: [makeFakeClient()]
      })
    })
    it('should return an error if AllClient throws', async () => {
      const { sut, allClientStub } = makeSut()
      jest.spyOn(allClientStub, 'all').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))
      const response = await sut.all({})
      expect(response).toEqual({
        statusCode: 500,
        body: {
          message: 'oops, there was an error',
          error: 'any message'
        }
      })
    })
  })
  describe('update()', () => {
    it('should call UpdateClient with correct values', async () => {
      const { sut, updateClientStub } = makeSut()
      const updateClientSpy = jest.spyOn(updateClientStub, 'update')
      await sut.update({
        body: {
          ...makeFakeClient()
        }
      })
      expect(updateClientSpy).toHaveBeenCalledWith(makeFakeClient())
    })
    it('should return UpdateClient values', async () => {
      const { sut } = makeSut()
      const response = await sut.update({
        body: {
          ...makeFakeClient()
        }
      })
      expect(response).toEqual({
        statusCode: 202,
        body: {
          ...makeFakeClient()
        }
      })
    })
    it('should return an error if UpdateClient throws', async () => {
      const { sut, updateClientStub } = makeSut()
      jest.spyOn(updateClientStub, 'update').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))
      const response = await sut.update({
        body: {
          ...makeFakeClient()
        }
      })
      expect(response).toEqual({
        statusCode: 500,
        body: {
          message: 'oops, there was an error',
          error: 'any message'
        }
      })
    })
  })
  describe('post()', () => {
    it('should call PostClient with correct values', async () => {
      const { sut, postClientStub } = makeSut()
      const postClientSpy = jest.spyOn(postClientStub, 'post')
      const { name, email } = makeFakeClient()
      await sut.post({
        body: { name, email }
      })
      expect(postClientSpy).toHaveBeenCalledWith({ name, email })
    })
    it('should return PostClient values', async () => {
      const { sut } = makeSut()
      const response = await sut.post({
        body: {
          ...makeFakeClient()
        }
      })
      expect(response).toEqual({
        statusCode: 201,
        body: {
          ...makeFakeClient()
        }
      })
    })
    it('should return an error if PostClient throws', async () => {
      const { sut, postClientStub } = makeSut()
      jest.spyOn(postClientStub, 'post').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))
      const response = await sut.post({
        body: {
          ...makeFakeClient()
        }
      })
      expect(response).toEqual({
        statusCode: 500,
        body: {
          message: 'oops, there was an error',
          error: 'any message'
        }
      })
    })
  })
  describe('delete()', () => {
    it('should call DeleteClient with correct values', async () => {
      const { sut, deleteClientStub } = makeSut()
      const deleteClientSpy = jest.spyOn(deleteClientStub, 'delete')
      await sut.delete({
        body: {
          id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7'
        }
      })
      expect(deleteClientSpy).toHaveBeenCalledWith('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')
    })
    it('should return an error if DeleteClient throws', async () => {
      const { sut, deleteClientStub } = makeSut()
      jest.spyOn(deleteClientStub, 'delete').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))
      const response = await sut.delete({
        body: {
          id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7'
        }
      })
      expect(response).toEqual({
        statusCode: 500,
        body: {
          message: 'oops, there was an error',
          error: 'any message'
        }
      })
    })
  })
})