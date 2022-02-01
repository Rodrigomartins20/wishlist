import dotenv from 'dotenv'
dotenv.config()

import fs from 'fs'
import { MysqlHelper } from './infra/db/mysql-helper'

const run = async () => {
  const mysql = new MysqlHelper()
  await mysql.connect()

  console.log('Running migrations.')
  fs.readFileSync('./migrations/schema.sql', 'utf-8').toString().split(';')
    .forEach(async query => {
      if (!query) return
      await mysql.query(query)
    })
  console.log('Done!')
}

run()