const { Op } = require('sequelize');

const { Product, Category } = require('../models');

const { getPagination, getPagingData } = require('../util/pagination');

class ProductsDAO {
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

// router.get('/', async (req, res) => {
//   try {
//     const where = {};

//     if (req.query.search) {
//       where.name = {
//         [Op.substring]: req.query.search,
//       };
//     }

//     const products = await Product.findAll({
//       attributes: { exclude: ['id', 'category'] },
//       include: {
//         model: Category,
//         as: 'type',
//         attributes: ['name'],
//         where: {
//           name: req.query.category ? req.query.category : { [Op.ne]: null },
//         },
//       },
//       where,
//     });

//     if (!products.length) {
//       throw new Error('Ningún producto encontrado');
//     }

//     return res.json({
//       status: 'success',
//       data: products,
//     });
//   } catch (error) {
//     return res.status(404).json({
//       status: 'error',
//       message: error.message,
//     });
//   }
// });

// module.exports = router;
