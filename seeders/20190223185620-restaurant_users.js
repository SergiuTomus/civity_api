'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('restaurant_users', [{
      restaurant_id: 1,
      name: 'Stefan Mandachi',
      phone: '07286492',
      email: 'stefan.mandachi@yahoo.com',
      password: '1234',
      status: 'operator',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Izabela Dragomir',
      phone: '07286492',
      email: 'izabela.dragomir@gmail.com',
      password: '1234',
      status: 'operator',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Amalia Romcea',
      phone: '07286492',
      email: 'amalia.romcea@gmail.com',
      password: '1234',
      status: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('restaurant_users', null, {});
    */
  }
};
