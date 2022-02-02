import request from 'supertest'
import app from '../../src/main/app'

describe('Create Client', () => {
  it('should create a client when a POST /clients is made', async () => {
    await request(app)
      .post('/clients')
      .send({
        name: 'any name',
        email: 'any email'
      })
      .expect(201)
  })
})