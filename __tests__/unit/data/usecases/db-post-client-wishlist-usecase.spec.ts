import DbPostClientWishlistUsecase from '../../../../src/data/usecases/db-post-client-wishlist-usecase'
import PostClientWishlistRepositoryInterface from '../../../../src/data/interfaces/post-client-wishlist-repository-interface'
import { mockPostClientWishlistRepository } from '../../../../__mocks__/repository/post-client-wishlist-repository-mock'
import makeFakeClientWishlist from '../../../../__mocks__/objects/make-fake-client-wishlist'

type SutTypes = {
  sut: DbPostClientWishlistUsecase
  postClientWishlistRepositoryStub: PostClientWishlistRepositoryInterface
}

const makeSut = (): SutTypes => {
  const postClientWishlistRepositoryStub = mockPostClientWishlistRepository()
  const sut = new DbPostClientWishlistUsecase(postClientWishlistRepositoryStub)
  return {
    sut,
    postClientWishlistRepositoryStub
  }
}

describe('Db All Client Usecase', () => {
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