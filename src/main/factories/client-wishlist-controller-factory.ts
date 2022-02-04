import DbPostClientWishlistUsecase from '@/data/usecases/db-post-client-wishlist-usecase'
import ClientRepository from '@/infra/repositories/client-repository'
import ClientWishlistRepository from '@/infra/repositories/client-wishlist-repository'
import ProductRepository from '@/infra/repositories/product-repository'
import ClientWishlistController from '@/presentation/client-wishlist-controller'

const ClientWishlistControllerFactory = (): ClientWishlistController => {
  const clientRepository = new ClientRepository()
  const productRepository = new ProductRepository()
  const clientWishlistRepository = new ClientWishlistRepository()
  const postClientWishlistUsecase = new DbPostClientWishlistUsecase(
    clientWishlistRepository,
    productRepository,
    clientWishlistRepository,
    clientRepository
  )
  return new ClientWishlistController(postClientWishlistUsecase)
}

export default ClientWishlistControllerFactory;