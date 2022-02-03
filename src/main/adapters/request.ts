import HttpRequest from '@/presentation/types/http-request'
import { Request } from 'express'

export default (expressRequest: Request): HttpRequest => {
  return {
    headers: expressRequest.header,
    body: expressRequest.body
  }
}