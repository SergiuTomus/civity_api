'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('received_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      operator_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      full_order_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      delivery_estimate: {
        type: Sequelize.STRING,
        allowNull: true
      },
      completed: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('received_orders');
  }
};