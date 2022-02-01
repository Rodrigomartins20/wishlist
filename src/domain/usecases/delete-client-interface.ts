export default interface DeleteClientInterface {
  delete (id: string): Promise<void>
}