import ProductModel from '../../src/domain/models/product-model'

const makeFakeProduct = (): ProductModel => ({
  price: 1699.0,
  image: "http://site.com/image.jpg",
  brand: "any brand",
  id: "1bf0f365-fbdd-4e21-9786-da459d78dd1f",
  title: "any title",
})

export default makeFakeProduct