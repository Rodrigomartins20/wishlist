import DbPostClientWishlistUsecase from '../../../../src/data/usecases/db-post-client-wishlist-usecase'
import PostClientWishlistRepositoryInterface from '../../../../src/data/interfaces/post-client-wishlist-repository-interface'
import { mockPostClientWishlistRepository } from '../../../../__mocks__/repository/post-client-wishlist-repository-mock'
import { mockFindProductByIdRepository } from '../../../../__mocks__/repository/find-product-repository-mock'
import makeFakeClientWishlist from '../../../../__mocks__/objects/make-fake-client-wishlist'
import FindProductByIdRepositoryInterface from '../../../../src/data/interfaces/find-product-by-id-repository-interface'

type SutTypes = {
  sut: DbPostClientWishlistUsecase
  postClientWishlistRepositoryStub: PostClientWishlistRepositoryInterface
  findProductByIdRepositoryStub: FindProductByIdRepositoryInterface
}

const makeSut = (): SutTypes => {
  const findProductByIdRepositoryStub = mockFindProductByIdRepository()
  const postClientWishlistRepositoryStub = mockPostClientWishlistRepository()
  const sut = new DbPostClientWishlistUsecase(
    postClientWishlistRepositoryStub,
    findProductByIdRepositoryStub
  )
  return {
    sut,
    postClientWishlistRepositoryStub,
    findProductByIdRepositoryStub
  }
}

describe('Db All Client Usecase', () => {
  it('should call FindProductByIdRepositoryStub with correct values', async () => {
    const { sut, findProductByIdRepositoryStub } = makeSut()
    const findProductByIdRepositorySpy = jest.spyOn(findProductByIdRepositoryStub, 'findProductById')
    await sut.post(makeFakeClientWishlist())
    expect(findProductByIdRepositorySpy).toHaveBeenCalledWith('4703e6c6-ef8f-4763-94ea-ce66a5f1a9a7')
  })
  it('should call ClientWishlistRepository', async () => {
    const { sut, postClientWishlistRepositoryStub } = makeSut()
    const postClientWishlistRepositorySpy = jest.spyOn(postClientWishlistRepositoryStub, 'post')
    await sut.post(makeFakeClientWishlist())
    expect(postClientWishlistRepositorySpy).toHaveBeenCalledTimes(1)
  })
  it('should throw if ClientWishlistRepository throws', async () => {
    const { sut, postClientWishlistRepositoryStub } = makeSut()
    jest.spyOn(postClientWishlistRepositoryStub, 'post').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))
    const promise = sut.post(makeFakeClientWishlist())
    await expect(promise).rejects.toThrow()
  })
  it('should return ClientWishlistRepository values', async () => {
    const { sut } = makeSut()
    const response = await sut.post(makeFakeClientWishlist())
    expect(response).toEqual(makeFakeClientWishlist())
  })
})