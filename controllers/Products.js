// Import the Products model
const Products = require('../models/Products');

// Function to handle the index route, which returns all products
const index = (req, res) => {
  const products = Products.all();
  res.render('views/products/index', { products});
};

// Function to handle the form route, which displays a form for creating or editing a product
const form = (req, res) => {
  if (req.params.id) {
    const product = Products.find(req.params.id);
    res.render('views/products/edit', { product })
  } else {
    res.render('views/products/create');
  }
};

// Function to handle the show route, which returns a specific product by its ID
const show = (req, res) => {
  const product = Products.find(req.params.id);
  res.render('views/products/show', { product });
};

// Function to handle the create route, which creates a new product using the request body
const create = (req, res) => {
  const products = Products.create(req.body);
  res.redirect('/products/' + products.id);
};

// Function to handle the update route, which updates a product's information using the request body
const update = (req, res) => {
  const products = Products.update(req.params.id, req.body);
  res.redirect('/products/' + req.params.id);
};


// Function to handle the remove route, which removes a product by its ID
const remove = (req, res) => {
  const products = Products.remove(req.params.id);
  res.redirect('/products')
};

// Export the functions to be used as controller actions in the routes
module.exports = { index, form, show, create, update, remove };
