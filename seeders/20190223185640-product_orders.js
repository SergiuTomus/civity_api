'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_orders', [{
      product_id: 1,
      order_id: 1,
      quantity: 1,
      single_price: 19.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_id: 2,
      order_id: 1,
      quantity: 1,
      single_price: 12.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_id: 3,
      order_id: 1,
      quantity: 1,
      single_price: 7.50,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_id: 4,
      order_id: 1,
      quantity: 3,
      single_price: 7.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_id: 5,
      order_id: 2,
      quantity: 1,
      single_price: 24.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_id: 6,
      order_id: 2,
      quantity: 1,
      single_price: 16.9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_id: 7,
      order_id: 2,
      quantity: 1,
      single_price: 12.9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      product_id: 8,
      order_id: 2,
      quantity: 2,
      single_price: 8.0,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('product_orders', null, {});
    */
  }
};
