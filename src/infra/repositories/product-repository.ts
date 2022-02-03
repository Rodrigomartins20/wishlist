import FindProductByIdRepositoryInterface from '@/data/interfaces/find-product-by-id-repository-interface'
import ProductModel from '@/domain/models/product-model'
import axios from 'axios'

export default class ProductRepository implements FindProductByIdRepositoryInterface {
  async findProductById (id: string): Promise<ProductModel> {
    const productsApiEndpoint = process.env.PRODUCTS_URL
    let product = null
    try {
      const response = await axios.get(`${productsApiEndpoint}/${id}/`)
      product = response.data
    } catch (error) {
      return null
    }
    if (product.error_message) {
      return null
    }
    return { ...product }
  }
}