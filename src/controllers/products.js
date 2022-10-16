const router = require('express').Router();
const { Op } = require('sequelize');

const { Product } = require('../models');

router.get('/', async (req, res) => {
  const where = {};

  if (req.query.search) {
    where.name = {
      [Op.substring]: req.query.search,
    };
  }

  const products = await Product.findAll({
    attributes: { exclude: ['id', 'category'] },
    where,
  });

  res.json(products);
});

module.exports = router;
