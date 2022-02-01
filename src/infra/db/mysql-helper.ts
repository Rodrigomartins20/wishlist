import mysql, { Connection } from 'mysql2/promise'

export class MysqlHelper {
  instance: Connection

  async connect (): Promise<Connection> {
    const instance = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    })

    this.instance = instance

    return instance
  }

  async query(query: string) {
    return await this.instance.execute(query)
  }
}