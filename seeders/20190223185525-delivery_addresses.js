'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('delivery_addresses', [{
      user_id: 1,
      address: 'str. Republicii, nr. 17',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      address: 'str. Traian, nr. 8',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      address: 'str. Altman, nr. 26',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 2,
      address: 'str. Baladei, nr. 53',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 3,
      address: 'str. Menker, nr. 35',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('delivery_addresses', null, {});
    */
  }
};
