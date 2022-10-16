const router = require('express').Router();
const CategoryController = require('./category.controller');

router.route('/').get(CategoryController.getCategories);

module.exports = router;
