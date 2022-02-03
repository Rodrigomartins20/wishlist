import ProductModel from '@/domain/models/product-model'

export default interface FindProductByIdRepositoryInterface {
  findProductById: (id: string) => Promise<ProductModel>
}