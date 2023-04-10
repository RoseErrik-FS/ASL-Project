// Initialize an array of products
let products = [
    {id: "1", slug: "pc-gpu-1", name: "Nvidia GPU"}
];

// Function to return all products
const all = () => {
    return products;
};

// Function to create a new product and add it to the products array
const create = (product) => {
    products.push(product);
    return products;
};

// Function to find a product by its ID
const find = (id) => {
    return products.find(p => p.id === id);
};

// Function to update a product's information by its ID
const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p;
    });
    return products;
};

// Function to remove a product by its ID
const remove = (id) => {
    products = products.filter(p => p.id !== id);
    return products;
};

// Export the functions to be used in other parts of the application
module.exports = { all, find, update, remove, create };
