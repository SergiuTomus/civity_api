'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('product_orders', [{
        product_id: 1,
        single_order_id: 1,
        quantity: 1,
        single_price: 19.00,
        created_at: new Date(),
        updated_at: new Date()
      },{
        product_id: 2,
        single_order_id: 1,
        quantity: 1,
        single_price: 12.99,
        created_at: new Date(),
        updated_at: new Date()
      },{
        product_id: 3,
        single_order_id: 1,
        quantity: 1,
        single_price: 7.50,
        created_at: new Date(),
        updated_at: new Date()
      },{
        product_id: 4,
        single_order_id: 1,
        quantity: 3,
        single_price: 7.00,
        created_at: new Date(),
        updated_at: new Date()
      },{
        product_id: 5,
        single_order_id: 2,
        quantity: 1,
        single_price: 24.00,
        created_at: new Date(),
        updated_at: new Date()
      },{
        product_id: 6,
        single_order_id: 2,
        quantity: 1,
        single_price: 16.9,
        created_at: new Date(),
        updated_at: new Date()
      },{
        product_id: 7,
        single_order_id: 2,
        quantity: 1,
        single_price: 12.9,
        created_at: new Date(),
        updated_at: new Date()
      },{
        product_id: 8,
        single_order_id: 2,
        quantity: 2,
        single_price: 8.0,
        created_at: new Date(),
        updated_at: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('product_orders', null, {});
    */
  }
};
