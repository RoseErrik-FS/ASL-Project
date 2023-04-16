// Import required modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
app.set("views", __dirname + "/templates");
app.set("view engine", "twig");

app.get("/", (req, res) => {
  res.render("home", {
    name: "World!",
    users: [
      { name: "John", email: "test@test.com" },
      { name: "Jane", email: "jane@test.com" },
    ],
  });
});

// Configure body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Import the product router from the 'routes' folder
const productRouter = require("./routes/Products");

// Mount the product router on the '/products' path
app.use("/products", productRouter);

// Start the server on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
