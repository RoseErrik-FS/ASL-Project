const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const productRouter = require('./routes/Products')

app.use("/products", productRouter)

app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });