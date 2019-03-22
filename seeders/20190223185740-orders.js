'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [{
      user_id: 1,
      delivery_address: "str. Republicii, nr. 17",
      restaurant_id: 1,
      restaurant_user_id: 3,
      status: 'preluata',
      total_price: 17.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      delivery_address: "str. Republicii, nr. 17",
      restaurant_id: 1,
      restaurant_user_id: 1,
      status: 'preluata',
      total_price: 23.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      delivery_address: "str. Republicii, nr. 17",
      restaurant_id: 2,
      restaurant_user_id: 3,
      status: 'livrata',
      total_price: 21.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      delivery_address: "str. Altman, nr. 26",
      restaurant_id: 2,
      restaurant_user_id: 1,
      status: 'livrata',
      total_price: 28.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      delivery_address: "str. Altman, nr. 26",
      restaurant_id: 4,
      restaurant_user_id: 2,
      status: 'preluata',
      total_price: 32.00,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 2,
      delivery_address: "str. Baladei, nr. 53",
      restaurant_id: 5,
      restaurant_user_id: null,
      status: 'in asteptare',
      total_price: 29.20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 2,
      delivery_address: "str. Baladei, nr. 53",
      restaurant_id: 5,
      restaurant_user_id: 2,
      status: 'respinsa',
      total_price: 51.40,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 3,
      delivery_address: "str. Menker, nr. 35",
      restaurant_id: 3,
      restaurant_user_id: null,
      status: 'in asteptare',
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
      return queryInterface.bulkDelete('orders', null, {});
    */
  }
};
