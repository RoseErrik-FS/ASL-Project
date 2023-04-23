'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('products', 'description', {
      type: Sequelize.TEXT('long'),
    });

    await queryInterface.addColumn('products', 'is_published', {
      type: Sequelize.BOOLEAN,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'description');
    await queryInterface.removeColumn('products', 'is_published');
  },
};
