import dotenv from 'dotenv'
dotenv.config()

import ProductRepository from '../../../../src/infra/repositories/product-repository'
import makeFakeProduct from '../../../../__mocks__/objects/make-fake-product'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Product Repository', () => {
  describe('FindByEmail', () => {
    it('should find a product by email', async () => {
      const sut = new ProductRepository()
      mockedAxios.get.mockResolvedValue({ data: {...makeFakeProduct()} })
      const response = await sut.findProductById('1bf0f365-fbdd-4e21-9786-da459d78dd1f')
      expect(response).toEqual(makeFakeProduct())
    })
    it('should return null if no product is found by email', async () => {
      const sut = new ProductRepository()
      mockedAxios.get.mockResolvedValue({ status: 404, data: { error_message: 'Product a not found', code: 'not_found' } })
      const response = await sut.findProductById('')
      expect(response).toEqual(null)
    })
    it('should return null if axios throws', async () => {
      const sut = new ProductRepository()
      mockedAxios.get.mockRejectedValueOnce(new Error('any error'))
      const response = await sut.findProductById('')
      expect(response).toEqual(null)
    })
  })
})