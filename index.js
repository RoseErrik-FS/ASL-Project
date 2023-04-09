const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// homepage route

// GET / HTTP/1.1
app.get("/", (request, response) => {
    response.send("Home Page! GET / HTTP/1.1");
  });
  
  // POST / HTTP/1.1
  app.post("/", (request, response) => {
    response.send("Home Page! POST / HTTP/1.1");
  });
  
  // GET / dynamic data /products/777-gpu-1
  app.get("/products/:productID-:productName", (request, response) => {
    response.send(
      "Product Page! Product Name: " +
        request.params.productName +
        ", Product ID: " +
        request.params.productID
    );
  });
  
  // GET / dynamic data /products/gpu-1
  app.get("/products/:productName", (request, response) => {
    response.send("Product Page! Product Name: " + request.params.productName);
  });


app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });