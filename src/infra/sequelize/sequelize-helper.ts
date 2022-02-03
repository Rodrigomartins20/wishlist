import { Sequelize, Model, DataTypes } from 'sequelize'

export const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
    logging: false
  }
)

export class Client extends Model {}
Client.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Client',
  indexes: [
    { unique: true, fields: ['email'] }
  ]
});

export class ClientWishlist extends Model {}
ClientWishlist.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  client: {
    type: DataTypes.UUID,
    allowNull: false
  },
  product: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'ClientWishlist',
  indexes: [
    { fields: ['client'] }
  ]
});