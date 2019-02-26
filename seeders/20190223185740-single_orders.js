'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('single_orders', [{
      full_order_id: 1,
      user_id: 1,
      client_name: 'Sergiu Tomus',
      total_price: 17.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_order_id: 1,
      user_id: 1,
      client_name: 'Tudor Maier',
      total_price: 23.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_order_id: 1,
      user_id: 1,
      client_name: 'Serban Stanciu',
      total_price: 21.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_order_id: 1,
      user_id: 1,
      client_name: 'Ioana Similie',
      total_price: 28.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_order_id: 2,
      user_id: 2,
      client_name: 'Ana Bogdan',
      total_price: 32.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_order_id: 2,
      user_id: 2,
      client_name: 'Sebastian Stan',
      total_price: 29.20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_order_id: 2,
      user_id: 2,
      client_name: 'Elena Alb',
      total_price: 51.40,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      full_order_id: 3,
      user_id: 3,
      client_name: 'Sebastian Dobrincu',
      total_price: 70.50,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('single_orders', null, {});
    */
  }
};
