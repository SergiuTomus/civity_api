'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('full_orders', [{
        user_id: 1,
        restaurant_id: 1,
        status: "trimisa",
        total_price: 89.00,
        created_at: new Date(),
        updated_at: new Date()
      },{
        user_id: 2,
        restaurant_id: 3,
        status: "trimisa",
        total_price: 112.60,
        created_at: new Date(),
        updated_at: new Date()
      },{
        user_id: 3,
        restaurant_id: 2,
        status: "trimisa",
        total_price: 70.50,
        created_at: new Date(),
        updated_at: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('full_orders', null, {});
    */
  }
};
