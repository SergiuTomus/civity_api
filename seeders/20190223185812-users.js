'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      first_name: 'Sergiu',
      last_name: 'Tomus',
      email: 'sergiutomus@yahoo.com',
      password: '$2b$10$eHID4RCQ3F648NSwg8y4C.dNyqqPmbxWe9faFeH6XTysG/lQH2gp2', // 1234
      phone: '07286492',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Ana',
      last_name: 'Bogdan',
      email: 'ana.bogdan@gmail.com',
      password: '$2b$10$fAjJ1THY7cohxH/MMLmViuWfzv7pWsj2gSxLpvyZZXVUmzafSHUY2', // 1234
      phone: '07286492',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Sebastian',
      last_name: 'Dobrincu',
      email: 'sebastian.dobrincu@gmail.com',
      password: '$2b$10$Hn9BqvSvL5M/kABm45e3kuO0y6AiGq1HJkpdaBq1/Gm3vIIwRdm4O', // 1234
      phone: '07286492',
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
