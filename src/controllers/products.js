const router = require("express").Router();

const { Product } = require("../models");

router.get("/", async (req, res) => {
  const notes = await Product.findAll();
  res.json(notes);
});

module.exports = router;
