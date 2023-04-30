const { Products, Variants, Images } = require("../models");

const index = async (req, res) => {
  const products = await Products.findAll({
    include: [{ model: Variants, include: [Images] }],
  });
  res.render("views/store/index", { products });
};

const show = async (req, res) => {
  const product = await Products.findOne({
    where: { slug: req.params.slug },
    include: [{ model: Variants, include: [Images] }],
  });

  if (!product) {
    return res.status(404).send("Product not found");
  }

  let variant = product.Variants[0];

  if (req.query.v) {
    variant = product.Variants.find((v) => v.slug === req.query.v);
  }

  res.render("views/store/show", { product, variant });
};

module.exports = { index, show };
