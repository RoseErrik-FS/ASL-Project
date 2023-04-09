RESTful APO assignments module 1

## start application
node index.js

## cURL commands

curl.exe http://localhost:3000/products

curl.exe --request POST --data "id=2&slug=PC-GPU-2&name=AMD GPU" http://localhost:3000/products

curl.exe --request POST --data "id=2&slug=PC-GPU-2&name=AMD GPU - NEW" http://localhost:3000/products/2

curl.exe http://localhost:3000/products/2

curl.exe --request POST http://localhost:3000/products/1/delete
