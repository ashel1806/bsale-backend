const Product = require('./product');
const Category = require('./category');

Category.hasMany(Product, { foreignKey: 'category' });
Product.belongsTo(Category, { foreignKey: 'category', as: 'type' });

module.exports = {
  Product,
  Category,
};
