"use strict";

// Reusable Description
const description =
  "Nvidia GPUs are specialized hardware devices designed to perform complex mathematical operations, particularly those required for graphics rendering and parallel computing tasks. They consist of a processor (or multiple processors) and dedicated memory, and are commonly used in applications such as gaming, artificial intelligence, machine learning, and scientific computing. Nvidia GPUs are known for their high performance and efficiency, and are used by a variety of industries and organizations around the world.";

const [createdAt, updatedAt] = [new Date(), new Date()];

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Variants", [
      {
        id: 1,
        title: "Asus",
        slug: "asus",
        description,
        price: 999.99,
        productId: 1,
        inventory: 2,
        createdAt,
        updatedAt,
      },
      {
        id: 2,
        title: "MSI",
        slug: "msi",
        description,
        price: 999.0,
        productId: 1,
        inventory: 24,
        createdAt,
        updatedAt,
      },
      {
        id: 3,
        title: "EVGA",
        slug: "evga",
        description,
        price: 1099.99,
        productId: 2,
        inventory: 0,
        createdAt,
        updatedAt,
      },
      {
        id: 4,
        title: "Asus",
        slug: "asus",
        description,
        price: 1199.99,
        productId: 2,
        inventory: 10,
        createdAt,
        updatedAt,
      },
    ]);
  },
};
