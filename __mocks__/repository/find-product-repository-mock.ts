import ProductModel from '../../src/domain/models/product-model'
import FindProductByIdRepositoryInterface from '../../src/data/interfaces/find-product-by-id-repository-interface'
import makeFakeProduct from '../objects/make-fake-product'

export const mockFindProductByIdRepository = (): FindProductByIdRepositoryInterface => {
  class findProductByIdRepository implements FindProductByIdRepositoryInterface {
    async findProductById (id: string): Promise<ProductModel> {
      return new Promise(resolve => resolve(makeFakeProduct()))
    }
  }
  return new findProductByIdRepository()
}