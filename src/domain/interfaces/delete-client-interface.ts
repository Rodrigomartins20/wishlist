export default interface DeleteClientInterface {
  delete (clientId: string): Promise<void>
}