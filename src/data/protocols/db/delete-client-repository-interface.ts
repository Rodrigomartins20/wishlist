export interface DeleteClientRepositoryInterface {
  delete: (id: string) => Promise<void>
}