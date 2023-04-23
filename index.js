// Import required modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
app.set("views", __dirname + "/templates");
app.set("view engine", "twig");

app.get("/", (req, res) => {
  res.render("views/home")
});

// Configure body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Import the product router from the 'routes' folder
const productRouter = require("./routes/Products");
const variantRouter = require("./routes/Variants");
const imageRouter = require("./routes/Images");

// Mount the product router on the '/products' path
app.use("/products", productRouter);
app.use("/variants", variantRouter);
app.use("/images", imageRouter);

// Start the server on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
