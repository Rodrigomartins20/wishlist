import FindClientInterface from '../src/domain/usecases/find-client-interface'
import ClientController from '../src/presentation/controllers/client-controller'

const mockFindClientInterface = (): FindClientInterface => {
  class FindClient implements FindClientInterface {
    find (id: string): any {
      return null
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
  })
})