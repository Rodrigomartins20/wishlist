import { ClientModel } from '../src/domain/models/client-model'
import AllClientInterface from '../src/domain/usecases/all-client-interface'
import FindClientInterface from '../src/domain/usecases/find-client-interface'
import UpdateClientInterface from '../src/domain/usecases/update-client-interface'
import ClientController from '../src/presentation/controllers/client-controller'

const mockUpdateClientInterface = (): UpdateClientInterface => {
  class UpdateClient implements UpdateClientInterface {
    async update (client: ClientModel): Promise<ClientModel> {
      return {
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }
    }
  }
  return new UpdateClient()
}

const mockAllClientInterface = (): AllClientInterface => {
  class AllClient implements AllClientInterface {
    async all (): Promise<ClientModel[]> {
      return [{
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }]
    }
  }
  return new AllClient()
}

const mockFindClientInterface = (): FindClientInterface => {
  class FindClient implements FindClientInterface {
    async find (id: string): Promise<ClientModel> {
      return new Promise(resolve => resolve({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }))
    }
  }
  return new FindClient()
}

type SutTypes = {
  sut: ClientController,
  findClientStub: FindClientInterface
  allClientStub: AllClientInterface
  updateClientStub: UpdateClientInterface
}

const makeSut = (): SutTypes => {
  const updateClientStub = mockUpdateClientInterface()
  const allClientStub = mockAllClientInterface()
  const findClientStub = mockFindClientInterface()
  const sut = new ClientController(findClientStub, allClientStub, updateClientStub)
  return {
    sut,
    findClientStub,
    allClientStub,
    updateClientStub
  }
}

describe('Client Controller', () => {
  describe('Find', () => {
    it('should call FindClient with correct values', async () => {
      const { sut, findClientStub } = makeSut()
      const findClientSpy = jest.spyOn(findClientStub, 'find')

      await sut.find('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')

      expect(findClientSpy).toHaveBeenCalledWith('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')
    })

    it('should return FindClient values', async () => {
      const { sut } = makeSut()

      const response = await sut.find('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')

      expect(response).toEqual({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })
    })

    it('should return an error if FindClient throws', async () => {
      const { sut, findClientStub } = makeSut()
      jest.spyOn(findClientStub, 'find').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))

      const response = await sut.find('e90b6e65-d87f-4fe3-b074-9ad1599bc9c7')

      expect(response).toEqual({
        message: 'oops',
        error: 'any message'
      })
    })
  })

  describe('All', () => {
    it('should call AllClient with correct values', async () => {
      const { sut, allClientStub } = makeSut()
      const allClientSpy = jest.spyOn(allClientStub, 'all')

      await sut.all()

      expect(allClientSpy).toHaveBeenCalledTimes(1)
    })
    it('should return AllClient values', async () => {
      const { sut } = makeSut()

      const response = await sut.all()

      expect(response).toEqual([{
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }])
    })
    it('should return an error if AllClient throws', async () => {
      const { sut, allClientStub } = makeSut()
      jest.spyOn(allClientStub, 'all').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))

      const response = await sut.all()

      expect(response).toEqual({
        message: 'oops',
        error: 'any message'
      })
    })
  })

  describe('Update', () => {
    it('should call UpdateClient with correct values', async () => {
      const { sut, updateClientStub } = makeSut()
      const updateClientSpy = jest.spyOn(updateClientStub, 'update')

      await sut.update({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })

      expect(updateClientSpy).toHaveBeenCalledWith({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })
    })

    it('should return UpdateClient values', async () => {
      const { sut } = makeSut()

      const response = await sut.update({
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

    it('should return an error if UpdateClient throws', async () => {
      const { sut, updateClientStub } = makeSut()
      jest.spyOn(updateClientStub, 'update').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))

      const response = await sut.update({
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      })

      expect(response).toEqual({
        message: 'oops',
        error: 'any message'
      })
    })
  })
})