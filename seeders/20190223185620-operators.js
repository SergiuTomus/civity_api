'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('operators', [{
        restaurant_id: 1,
        first_name: 'Cristina',
        last_name: 'Popescu',
        phone: '07286492',
        user_name: 'cristina.popescu',
        password: '1234',
        status: 'operator',
        created_at: new Date(),
        updated_at: new Date()
      },{
        restaurant_id: 1,
        first_name: 'Izabela',
        last_name: 'Dragomir',
        phone: '07286492',
        user_name: 'izabela.dragomir',
        password: '1234',
        status: 'operator',
        created_at: new Date(),
        updated_at: new Date()
      },{
        restaurant_id: 1,
        first_name: 'Amalia',
        last_name: 'Romcea',
        phone: '07286492',
        user_name: 'amalia.romcea@gmail.com',
        password: '1234',
        status: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      }]);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('operators', null, {});
    */
  }
};
