// Import the express module
const express = require("express");
// Create an express app
const app = express();
// Import the body-parser module
const bodyParser = require("body-parser");
// Configure body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// Import the dotenv module to load environment variables
require("dotenv").config();
// Set the views directory to the 'templates' folder
app.set("views", __dirname + "/templates");
// Set the view engine to twig
app.set("view engine", "twig");
// Serve static files from the 'public' folder
app.use("/public", express.static("public"));
// Import the express-fileupload module
const fileUpload = require("express-fileupload");
// Enable file uploads using express-fileupload
app.use(fileUpload());

const { index } = require("./controllers/Store");
app.get("/", index);

//app.get("/", (req, res) => {
//  res.render("store/index");
//});

// Import the product, variant, image and store routers from their respective files
const productRouter = require("./routes/Products");
const variantRouter = require("./routes/Variants");
const imageRouter = require("./routes/Images");
const storeRouter = require("./routes/Store");

// Mount the routers on their respective paths
app.use("/products", productRouter);
app.use("/variants", variantRouter);
app.use("/images", imageRouter);
app.use("/store", storeRouter);

// Start the server on the specified port, or on port 3000 if no port is specified
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
