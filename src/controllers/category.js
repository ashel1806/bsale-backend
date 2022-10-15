const router = require("express").Router();
const { Op } = require("sequelize");

const { Product } = require("../models");
const { Category } = require("../models");

router.get("/", async (req, res) => {
  const where = {};

  if (req.query.name) {
    where.name = {
      [Op.substring]: req.query.name,
    };
  }

  const productsByCategory = await Category.findAll({
    attributes: { exclude: ["id"] },
    include: {
      model: Product,
      as: "products",
      attributes: { exclude: ["id", "category"] },
    },
    where,
  });

  res.json(productsByCategory);
});

module.exports = router;
