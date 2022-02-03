import DbPostClientWishlistUsecase from '../../../../src/data/usecases/db-post-client-wishlist-usecase'
import PostClientWishlistRepositoryInterface from '../../../../src/data/interfaces/post-client-wishlist-repository-interface'
import { mockPostClientWishlistRepository } from '../../../../__mocks__/repository/post-client-wishlist-repository-mock'
import { mockFindProductByIdRepository } from '../../../../__mocks__/repository/find-product-by-id-repository-mock'
import { mockFindWishlistByProductIdRepository } from '../../../../__mocks__/repository/find-wishlist-by-product-id-repository-mock'
import makeFakeClientWishlist from '../../../../__mocks__/objects/make-fake-client-wishlist'
import FindProductByIdRepositoryInterface from '../../../../src/data/interfaces/find-product-by-id-repository-interface'
import FindWishlistByProductIdRepositoryInterface from '../../../../src/data/interfaces/find-wishlist-by-product-id-repository-interface'

type SutTypes = {
  sut: DbPostClientWishlistUsecase
  postClientWishlistRepositoryStub: PostClientWishlistRepositoryInterface
  findProductByIdRepositoryStub: FindProductByIdRepositoryInterface
  findWishlistByProductIdRepositoryStub: FindWishlistByProductIdRepositoryInterface
}

const makeSut = (): SutTypes => {
  const findWishlistByProductIdRepositoryStub = mockFindWishlistByProductIdRepository()
  const findProductByIdRepositoryStub = mockFindProductByIdRepository()
  const postClientWishlistRepositoryStub = mockPostClientWishlistRepository()
  const sut = new DbPostClientWishlistUsecase(
    postClientWishlistRepositoryStub,
    findProductByIdRepositoryStub,
    findWishlistByProductIdRepositoryStub
  )
  return {
    sut,
    postClientWishlistRepositoryStub,
    findProductByIdRepositoryStub,
    findWishlistByProductIdRepositoryStub
  }
}

describe('Db All Client Usecase', () => {
  it('should call FindProductByIdRepository with correct values', async () => {
    const { sut, findProductByIdRepositoryStub } = makeSut()
    const findProductByIdRepositorySpy = jest.spyOn(findProductByIdRepositoryStub, 'findProductById')
    await sut.post(makeFakeClientWishlist())
    expect(findProductByIdRepositorySpy).toHaveBeenCalledWith('4703e6c6-ef8f-4763-94ea-ce66a5f1a9a7')
  })
  it('should throw if FindProductByIdRepository returns null', async () => {
    const { sut, findProductByIdRepositoryStub } = makeSut()
    jest.spyOn(findProductByIdRepositoryStub, 'findProductById').mockReturnValueOnce(new Promise(resolve => resolve(null)))
    const promise = sut.post(makeFakeClientWishlist())
    expect(promise).rejects.toThrow('product doesnt exists')
  })
  it('should call FindWishlistByProductIdRepository with correct values', async () => {
    const { sut, findWishlistByProductIdRepositoryStub } = makeSut()
    const findWishlistByProductIdRepositorySpy = jest.spyOn(findWishlistByProductIdRepositoryStub, 'findWishlistByProductId')
    await sut.post(makeFakeClientWishlist())
    expect(findWishlistByProductIdRepositorySpy).toHaveBeenCalledWith('4703e6c6-ef8f-4763-94ea-ce66a5f1a9a7')
  })
  it('should throw if FindWishlistByProductIdRepository returns a product', async () => {
    const { sut, findWishlistByProductIdRepositoryStub } = makeSut()
    jest.spyOn(findWishlistByProductIdRepositoryStub, 'findWishlistByProductId').mockReturnValueOnce(new Promise(resolve => resolve(makeFakeClientWishlist())))
    const promise = sut.post(makeFakeClientWishlist())
    expect(promise).rejects.toThrow('product already on client wishlist')
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