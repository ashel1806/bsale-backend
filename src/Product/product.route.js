const router = require('express').Router();
const ProductsController = require('./product.controller');

router.route('/').get(ProductsController.getProducts);

module.exports = router;
