'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Sergiu Tomus',
      email: 'sergiutomus@yahoo.com',
      password: '$2b$10$CmIXpHCQZPNRlAloCKM1TuD6pt9Bhfum8FRV1N.rjK.NYHT4F8AKi', // 123456
      phone: '0728649258',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ana Bogdan',
      email: 'ana.bogdan@gmail.com',
      password: '$2b$10$N8l.YQsurocwJM2zVwHAROj/HS9Da6OItCyYo46XIhTO0NvQXB1b2', // 123456
      phone: '0728649258',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sebastian Dobrincu',
      email: 'sebastian.dobrincu@gmail.com',
      password: '$2b$10$ZzQGR3reDntFLFSIAm1P/Ot1wJGzZ20cfyVrEb4Zvl2VM1.CalF8O', // 123456
      phone: '0728649258',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('users', null, {});
    */
  }
};
