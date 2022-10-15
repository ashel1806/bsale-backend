const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Category extends Model {}
Category.init(
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
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'category',
    tableName: 'category'
  }
)

module.exports = Category
