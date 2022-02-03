import HttpRequest from '@/presentation/types/http-request'
import { Request } from 'express'

export default (expressRequest: Request): HttpRequest => {
  let body = expressRequest.body
  if (expressRequest.params.id) {
    body = {
      id: expressRequest.params.id
    }
  }
  return {
    headers: expressRequest.header,
    body
  }
}