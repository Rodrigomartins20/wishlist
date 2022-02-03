import { Express } from 'express'
import { readdirSync } from 'fs'

export default (app: Express) => {
  readdirSync(`${__dirname}/../routes`).map(async file => {
    (await import(`../routes/${file}`)).default(app)
  })
}