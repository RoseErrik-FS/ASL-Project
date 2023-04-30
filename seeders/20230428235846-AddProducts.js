"use strict";

// Reusable Description

const description = `Nvidia GPUs are specialized hardware devices designed to perform complex mathematical operations, particularly those required for graphics rendering and parallel computing tasks. They consist of a processor (or multiple processors) and dedicated memory, and are commonly used in applications such as gaming, artificial intelligence, machine learning, and scientific computing. Nvidia GPUs are known for their high performance and efficiency, and are used by a variety of industries and organizations around the world.`;

const [createdAt, updatedAt] = [new Date(), new Date()];

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Products", [
      {
        id: 1,

        title: "Nvidia GeForce RTX 2080",

        slug: "nvidia-geforce-rtx-2080",

        price: 899.99,

        is_published: true,

        description,
        createdAt,
        updatedAt,
      },

      {
        id: 2,

        title: "Nvidia GeForce RTX 3080",

        slug: "nvidia-geforce-rtx-3080",

        price: 1099.99,

        is_published: true,

        description,
        createdAt,
        updatedAt,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Products", null, {});
  },
};
