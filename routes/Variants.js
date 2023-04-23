// Import required modules
const express = require("express");
const router = express.Router();
const variantsCtrl = require("../controllers/Variants");

// Define the routes and their corresponding controller functions

// Route to get a list of all products
router.get("/", variantsCtrl.index);

// Route to display the form for creating a new product
router.get("/new", variantsCtrl.form);

// Route to get a specific product by its ID
router.get("/:id", variantsCtrl.show);

// Route to display the form for editing a product
router.get("/:id/edit", variantsCtrl.form);

// Route to create a new product using a POST request
router.post("/", variantsCtrl.create);

// Route to update a product's information using a POST request
router.post("/:id", variantsCtrl.update);

// Route to remove a product using a DELETE request
router.delete("/:id", variantsCtrl.remove);

// Route to remove a product using a POST request (alternative method)
router.get("/:id/delete", variantsCtrl.remove);

// Export the router to be used in other parts of the application
module.exports = router;
