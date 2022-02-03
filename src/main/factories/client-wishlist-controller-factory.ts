import DbPostClientWishlistUsecase from '@/data/usecases/db-post-client-wishlist-usecase'
import ClientWishlistRepository from '@/infra/repositories/client-wishlist-repository'
import ClientWishlistController from '@/presentation/client-wishlist-controller'

const ClientWishlistControllerFactory = (): ClientWishlistController => {
  const clientWishlistRepository = new ClientWishlistRepository()
  const postClientWishlistUsecase = new DbPostClientWishlistUsecase(clientWishlistRepository)
  return new ClientWishlistController(postClientWishlistUsecase)
}

export default ClientWishlistControllerFactory;