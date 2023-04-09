const index = (reg, res) => {
  res.send("Products.index");
};

const form = ( reg, res) => {
  res.send('products.form')
}

const show = ( reg, res) => {
  res.send('products.show')
}

const create = ( reg, res) => {
  res.send('products.create')
}

const update = ( reg, res) => {
  res.send('products.update')
}

const remove = ( reg, res) => {
  res.send('products.delete')
}

module.exports = { index, form, show, create, update, remove };
