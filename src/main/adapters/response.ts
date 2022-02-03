import HttpResponse from '@/presentation/types/http-response'
import { Response } from 'express'

export default (internalResponse: HttpResponse, expressResponse: Response): Response => {
  return expressResponse.status(internalResponse.statusCode).send(internalResponse.body)
}