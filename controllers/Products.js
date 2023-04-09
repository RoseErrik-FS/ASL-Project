const Products = require('../models/Products')

const index = (req, res) => {
  const products = Products.all()
  res.json(products)
};

const form = (req, res) => {
  res.send('products.form')
}

const show = (req, res) => {
  const product = Products.find(req.params.id)
  res.json(product)
}

const create = (req, res) => {
  const products = Products.create(req.body)
  res.json(products)
}

const update = (req, res) => {
  const products = Products.update(req.params.id, req.body)
  res.json(products)
}

const remove = (req, res) => {
  const products = Products.remove(req.params.id)
  res.json(products)
}

module.exports = { index, form, show, create, update, remove };
