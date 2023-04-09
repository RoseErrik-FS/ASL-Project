const Products = require('../models/Products')

const index = (reg, res) => {
  const products = Products.all
 res.json(products)
};

const form = ( reg, res) => {
  res.send('products.form')
}

const show = ( reg, res) => {
  const products = Products.find(reg.param.id)
  res.json(products)
}

const create = ( reg, res) => {
  const products = Products.create(reg.body)
  res.json(products)
}

const update = ( reg, res) => {
  const products = Products.update(reg.param.id, reg.body)
  res.json(products)
}

const remove = ( reg, res) => {
  const products = Products.remove(reg.param.id)
  res.json(products)
}

module.exports = { index, form, show, create, update, remove };
