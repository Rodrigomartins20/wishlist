import FindClientInterface from '../src/domain/usecases/find-client-interface'
import ClientController from '../src/presentation/controllers/client-controller'

const mockFindClientInterface = (): FindClientInterface => {
  class FindClient implements FindClientInterface {
    find (id: string): any {
      return {
        id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
        name: 'any name',
        email: 'any@mail.com'
      }
    }
  }
  return new FindClient()
}

type SutTypes = {
  sut: ClientController,
  findClientStub: FindClientInterface
}

const makeSut = (): SutTypes => {
  const findClientStub = mockFindClientInterface()
  const sut = new ClientController(findClientStub)
  return {
    sut,
    findClientStub
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
})