// Import the Products model
const { Products } = require("../models");

// Function to handle the index route, which returns all products
const index = async (req, res) => {
  const products = await Products.findAll();
  res.render('views/products/index', { products});
  //res.json(products);
};

// Function to handle the form route, which displays a form for creating or editing a product
const form = async (req, res) => {
  if (req.params.id) {
    const products = await Products.findByPk(req.params.id);
    res.render("views/products/edit", { products });
  } else {
    res.render("views/products/create");
  }
};

// Function to handle the show route, which returns a specific product by its ID
const show = async (req, res) => {
  const products = await Products.findByPk(req.params.id);
  res.render("views/products/show", { products});
};

// Function to handle the create route, which creates a new product using the request body
const create = async (req, res) => {
  const productData = {
    ...req.body,
    is_published: req.body.is_published === 'on'
  };

  const products = await Products.create(productData);
  res.redirect("/products/" + products.id);
};


// Function to handle the update route, which updates a product's information using the request body
const update = async (req, res) => {
  const updatedData = {
    ...req.body,
    is_published: req.body.is_published === 'on'
  };

  await Products.update(updatedData, {
    where: {
      id: req.params.id
    }
  });
  res.redirect("/products/" + req.params.id);
};

// Function to handle the remove route, which removes a product by its ID
const remove = async (req, res) => {
  await Products.destroy({
    where: {
      id: req.params.id
    }
  });
  res.redirect("/products");
};

// Export the functions to be used as controller actions in the routes
module.exports = { index, form, show, create, update, remove };
