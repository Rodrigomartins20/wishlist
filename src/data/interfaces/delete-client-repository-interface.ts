export default interface DeleteClientRepositoryInterface {
  delete: (id: string) => Promise<void>
}