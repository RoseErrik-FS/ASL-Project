// Import required modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Configure body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Import the product router from the 'routes' folder
const productRouter = require('./routes/Products');

// Mount the product router on the '/products' path
app.use("/products", productRouter);

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
