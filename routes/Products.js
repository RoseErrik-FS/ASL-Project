// Import required modules
const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/Products");

// Define the routes and their corresponding controller functions

// Route to get a list of all products
router.get("/", productCtrl.index);

// Route to display the form for creating a new product
router.get("/new", productCtrl.form);

// Route to get a specific product by its ID
router.get("/:id", productCtrl.show);

// Route to display the form for editing a product
router.get("/:id/edit", productCtrl.form);

// Route to create a new product using a POST request
router.post("/", productCtrl.create);

// Route to update a product's information using a POST request
router.post("/:id", productCtrl.update);

// Route to remove a product using a DELETE request
router.delete("/:id", productCtrl.remove);

// Route to remove a product using a POST request (alternative method)
router.get("/:id/delete", productCtrl.remove);

// Export the router to be used in other parts of the application
module.exports = router;
