'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('received_orders', [{
      operator_id: 1,
      full_order_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      operator_id: 2,
      full_order_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('received_orders', null, {});
    */
  }
};
