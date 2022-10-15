const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Product extends Model {}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url_image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: false
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      discount: false
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'product',
    tableName: 'product'
  }
)

module.exports = Product