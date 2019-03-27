'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [{
      user_id: 1,
      user_name: 'Sergiu Tomus',
      user_phone: '0728649258',
      delivery_address: "str. Republicii, nr. 17",
      restaurant_id: 1,
      restaurant_user: null,
      status: 'in asteptare',
      total_price: 60.49,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 2,
      user_name: 'Ana Bogdan',
      user_phone: '0728649258',
      delivery_address: "str. Baladei, nr. 53",
      restaurant_id: 1,
      restaurant_user: null,
      status: 'in asteptare',
      total_price: 40.90,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 3,
      user_name: 'Sebastian Dobrincu',
      user_phone: '0728649258',
      delivery_address: "str. Menker, nr. 35",
      restaurant_id: 1,
      restaurant_user: null,
      status: 'in asteptare',
      total_price: 29,
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
