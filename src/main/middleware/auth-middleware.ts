import { Request, Response, NextFunction } from 'express'

const authMiddleware = (req: Request, res: Response, next: NextFunction): Response|void => {
  if (! req.headers.authorization || req.headers.authorization.split(' ')[1] !== process.env.ACCESS_TOKEN) {
    return res.status(401).send()
  }
  next()
}

export default authMiddleware