'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('restaurant_users', [{
      restaurant_id: 2,
      name: 'Stefan Mandachi',
      phone: '0728649258',
      email: 'stefan.mandachi@yahoo.com',
      password: '$2b$10$ZzQGR3reDntFLFSIAm1P/Ot1wJGzZ20cfyVrEb4Zvl2VM1.CalF8O', // 123456
      status: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Amalia Romcea',
      phone: '0728649258',
      email: 'amalia.romcea@gmail.com',
      password: '$2b$10$N8l.YQsurocwJM2zVwHAROj/HS9Da6OItCyYo46XIhTO0NvQXB1b2', // 123456
      status: 'Operator',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Sergiu Tomus',
      phone: '0728649258',
      email: 'sergiutomus@yahoo.com',
      password: '$2b$10$CmIXpHCQZPNRlAloCKM1TuD6pt9Bhfum8FRV1N.rjK.NYHT4F8AKi', // 123456
      status: 'Admin',
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
