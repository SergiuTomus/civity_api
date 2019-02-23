'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('received_orders', [{
        operator_id: 1,
        full_order_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
        operator_id: 2,
        full_order_id: 2,
        created_at: new Date(),
        updated_at: new Date()
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
