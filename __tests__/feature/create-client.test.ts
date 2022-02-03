import request from 'supertest'
import app from '../../src/main/config/app'

describe('Create Client', () => {
  it('should create a client', async () => {
    await request(app)
      .post('/clients')
      .send({
        name: 'any name',
        email: 'any@mail.com'
      })
      .expect(201)
  })
})