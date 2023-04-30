// Import required modules
const express = require("express");
const router = express.Router();
const imagesCtrl = require("../controllers/Images");
const { uploadImage } = require("../middlewares");

// Define the routes and their corresponding controller functions

// Route to get a list of all products
router.get("/", imagesCtrl.index);

// Route to display the form for creating a new product
router.get("/new", imagesCtrl.form);

// Route to get a specific product by its ID
router.get("/:id", imagesCtrl.show);

// Route to display the form for editing a product
router.get("/:id/edit", imagesCtrl.form);

// Route to create a new product using a POST request
router.post("/", imagesCtrl.create, uploadImage);

// Route to update a product's information using a POST request
router.post("/:id", imagesCtrl.update, uploadImage);

// Route to remove a product using a DELETE request
router.delete("/:id", imagesCtrl.remove);

// Route to remove a product using a POST request (alternative method)
router.get("/:id/delete", imagesCtrl.remove);

// Export the router to be used in other parts of the application
module.exports = router;
