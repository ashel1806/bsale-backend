const { Op } = require('sequelize');

const { Product, Category } = require('../models');

const { getPagination, getPagingData } = require('../util/pagination');

class ProductsDAO {
  /**
   *
   * @param {object} filter The search parameters to use in the query.
   * @param {number} page The page of products to retrieve.
   * @param {number} productsPerPage The number of products to display per page.
   *
   * @returns {GetProductsResult} An object with product results and pagination data.
   */
  static async getProducts({
    filter = {},
    page = 0,
    productsPerPage = 10,
  } = {}) {
    let where = {};
    const { limit, offset } = getPagination(page, productsPerPage);

    if (filter.search) {
      where.name = {
        [Op.substring]: filter.search,
      };
    }

    const products = await Product.findAndCountAll({
      attributes: { exclude: ['id', 'category'] },
      include: {
        model: Category,
        as: 'type',
        attributes: ['name'],
        where: {
          name: filter.category ? filter.category : { [Op.ne]: null },
        },
      },
      where,
      limit,
      offset,
    });

    return getPagingData(products, page, limit);
  }
}

module.exports = ProductsDAO;

/**
 * A category.
 * @typedef {Object} Category
 * @property {string} name The name of the category.
 */

/**
 * A product from Database.
 * @typedef {Object} Product
 * @property {string} name
 * @property {string} url_image
 * @property {number} price
 * @property {number} discount
 * @property {Category} type
 */

/**
 * Result set for getProducts method.
 * @typedef {object} GetProductsResult
 * @property {number} totalItems Total number of products.
 * @property {Product[]} products Array of products.
 * @property {number} totalPages Total number of pages.
 * @property {number} currentPage Current page.
 */
