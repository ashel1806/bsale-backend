const ProductsDAO = require('./product.dao');

class ProductsController {
  static async getProducts(req, res) {
    const PRODUCTS_PER_PAGE = 10;
    let { page, category, search, limit } = req.query;
    const filter = {};

    if (search) {
      filter.search = search;
    }

    if (category) {
      filter.category = category;
    }

    let productsPerPage = limit ?? PRODUCTS_PER_PAGE;
    console.log(limit)

    const response = await ProductsDAO.getProducts({
      filter,
      page,
      productsPerPage,
    });

    res.json(response);
  }
}

module.exports = ProductsController;
