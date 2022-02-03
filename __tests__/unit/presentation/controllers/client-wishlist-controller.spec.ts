import PostClientWishlistInterface from '../../../../src/domain/interfaces/post-client-wishlist-interface'
import ClientWishlistController from '../../../../src/presentation/client-wishlist-controller'
import mockPostClientWishlistInterface from '../../../../__mocks__/usecase/post-client-wishlist-interface-mock'
import makeFakeClientWishlist from '../../../../__mocks__/objects/make-fake-client-wishlist'

type SutTypes = {
  sut: ClientWishlistController
  postClientWishlistStub: PostClientWishlistInterface
}

const makeSut = (): SutTypes => {
  const postClientWishlistStub = mockPostClientWishlistInterface()
  const sut = new ClientWishlistController(postClientWishlistStub)
  return {
    sut,
    postClientWishlistStub
  }
}

describe('Client Wishlist Controller', () => {
  describe('post()', () => {
    it('should call PostClientWishlist with correct values', async () => {
      const { sut, postClientWishlistStub } = makeSut()
      const postClientWishlistSpy = jest.spyOn(postClientWishlistStub, 'post')
      const { client, product } = makeFakeClientWishlist()
      await sut.post({
        body: { client, product }
      })
      expect(postClientWishlistSpy).toHaveBeenCalledWith({ client, product })
    })
    it('should return PostClientWishlist values', async () => {
      const { sut } = makeSut()
      const response = await sut.post({
        body: {
          ...makeFakeClientWishlist()
        }
      })
      expect(response).toEqual({
        statusCode: 201,
        body: {
          ...makeFakeClientWishlist()
        }
      })
    })
    it('should return an error if PostClientWishlist throws', async () => {
      const { sut, postClientWishlistStub } = makeSut()
      jest.spyOn(postClientWishlistStub, 'post').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('any message'))))
      const response = await sut.post({
        body: {
          ...makeFakeClientWishlist()
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