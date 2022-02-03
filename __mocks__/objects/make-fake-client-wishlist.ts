import ClientWishlistModel from '../../src/domain/models/client-wishlist-model'

const makeFakeClientWishlist = (): ClientWishlistModel => ({
  id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
  client: 'b49ad762-b28a-4b63-808f-18584e8e7246',
  product: '4703e6c6-ef8f-4763-94ea-ce66a5f1a9a7'
})

export default makeFakeClientWishlist