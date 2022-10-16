const { Category } = require('../models');

class CategoryController  {
  static async getCategories(req, res) {
    const categories = await Category.findAll({
      attributes: ['name'],
    });
    res.json(categories);
  }
}

module.exports = CategoryController;