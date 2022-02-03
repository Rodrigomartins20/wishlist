import DbDeleteClientUsecase from '../../../../src/data/usecases/db-delete-client-usecase'
import { DeleteClientRepositoryInterface } from '../../../../src/data/protocols/db/delete-client-repository-interface'
import { mockDeleteClientRepository } from '../../../../__mocks__/repository/delete-client-repository-mock'

type SutTypes = {
  sut: DbDeleteClientUsecase
  deleteClientRepositoryStub: DeleteClientRepositoryInterface
}

const makeSut = (): SutTypes => {
  const deleteClientRepositoryStub = mockDeleteClientRepository()
  const sut = new DbDeleteClientUsecase(
    deleteClientRepositoryStub
  )
  return {
    sut,
    deleteClientRepositoryStub
  }
}

describe('Db All Client Usecase', () => {
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