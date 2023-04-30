// Import the variants model
const { Variants, Products } = require("../models");

// Function to handle the index route, which returns all variants
const index = async (req, res) => {
  const variants = await Variants.findAll();
  res.render("views/variants/index", { variants });
  //res.json(variants);
};

// Function to handle the form route, which displays a form for creating or editing a variant
const form = async (req, res) => {
  const products = await Products.findAll();
  if (req.params.id) {
    const variants = await Variants.findByPk(req.params.id);
    res.render("views/variants/edit", { variants, products });
  } else {
    res.render("views/variants/create", { products });
  }
};

// Function to handle the show route, which returns a specific variant by its ID
const show = async (req, res) => {
  const variants = await Variants.findByPk(req.params.id);
  console.log(variants);
  if (!variants) {
    res.render("views/variants/show", { error: "Variant not found" });
    return;
  }
  const products = await variants.getProduct();
  res.render("views/variants/show", { variants, products });
};

// Function to handle the create route, which creates a new variant using the request body
const create = async (req, res) => {
  const variants = await Variants.create(req.body);
  res.redirect("/variants/" + variants.id);
};

// Function to handle the update route, which updates a variant's information using the request body
const update = async (req, res) => {
  await Variants.update(req.body, {
    where: {
      id: Number(req.params.id),
    },
  });
  res.redirect("/variants/" + req.params.id);
};

// Function to handle the remove route, which removes a variant by its ID
const remove = async (req, res) => {
  await Variants.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/variants");
};

// Export the functions to be used as controller actions in the routes
module.exports = { index, form, show, create, update, remove };
