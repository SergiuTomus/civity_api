'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [{
      name: "meniu",
      restaurant_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "salate",
      restaurant_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "desert",
      restaurant_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "supe",
      restaurant_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "pizza",
      restaurant_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "paste",
      restaurant_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "pizza",
      restaurant_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "desert",
      restaurant_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "paste",
      restaurant_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "pizza",
      restaurant_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "desert",
      restaurant_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "paste",
      restaurant_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "pizza",
      restaurant_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "desert",
      restaurant_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "paste",
      restaurant_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "pizza",
      restaurant_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "desert",
      restaurant_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "paste",
      restaurant_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "pizza",
      restaurant_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "desert",
      restaurant_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "paste",
      restaurant_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "pizza",
      restaurant_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "desert",
      restaurant_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "paste",
      restaurant_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "pizza",
      restaurant_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "desert",
      restaurant_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('categories', null, {});
    */
  }
};
