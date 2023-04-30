// Import the images model
const { Images, Variants } = require("../models");

// Function to handle the index route, which returns all images
const index = async (req, res) => {
  const images = await Images.findAll();
  const variants = await Variants.findAll();
  res.render("views/images/index", { images, variants });
  //res.json(images);
};

// Function to handle the form route, which displays a form for creating or editing a image
const form = async (req, res) => {
  const variants = await Variants.findAll();
  if (req.params.id) {
    const images = await Images.findByPk(req.params.id);
    res.render("views/images/edit", { images, variants });
  } else {
    res.render("views/images/create", { variants });
  }
};

// Function to handle the show route, which returns a specific image by its ID
const show = async (req, res) => {
  const images = await Images.findByPk(req.params.id);
  if (!images) {
    res.status(404).send("Image not found");
    return;
  }
  const variant = await images.getVariant();
  if (!variant) {
    res.status(404).send("Variant not found");
    return;
  }
  res.render("views/images/show", { images, variant });
};

// Function to handle the create route, which creates a new image using the request body
const create = async (req, res, next) => {
  const images = await Images.create(req.body);
  req.body.id = images.id; // Sets a pretext "imageId" for our upload middleware
  next(); // Invoke our upload middleware with next()
  res.redirect("/images/" + images.id);
};

// Function to handle the update route, which updates a image's information using the request body
const update = async (req, res, next) => {
  await Images.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  req.body.id = req.params.id; // Sets a pretext "imageId" for our upload middleware
  next(); // Invoke our upload middleware with next()
  res.redirect("/images/" + req.params.id);
};

// Function to handle the remove route, which removes a image by its ID
const remove = async (req, res) => {
  await Images.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/images");
};

// Export the functions to be used as controller actions in the routes
module.exports = { index, form, show, create, update, remove };
