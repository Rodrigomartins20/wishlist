import { ClientModel } from '../../src/domain/models/client-model'

const makeFakeClient = (): ClientModel => ({
  id: 'e90b6e65-d87f-4fe3-b074-9ad1599bc9c7',
  name: 'any name',
  email: 'any@mail.com'
})

export default makeFakeClient