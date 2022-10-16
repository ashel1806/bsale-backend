const router = require('express').Router();
const { Op } = require('sequelize');

const { Product, Category } = require('../models');

router.get('/', async (req, res) => {
  try {
    const where = {};
  
    if (req.query.search) {
      where.name = {
        [Op.substring]: req.query.search,
      };
    }
  
    const products = await Product.findAll({
      attributes: { exclude: ['id', 'category'] },
      include: {
        model: Category,
        as: 'type',
        attributes: ['name'],
        where: {
          name: req.query.category ? req.query.category : { [Op.ne]: null },
        }
      },
      where,
    });

    if (!products.length) {
      throw new Error('Ningún producto encontrado');
    }
  
    return res.json({
      status: 'success',
      data: products,
    });
    
  } catch (error) {
    return res.status(404).json({
      status: 'error',
      message: error.message,
    });
  }
});

module.exports = router;
