'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      restaurant_id: 1,
      name: 'Platou Persia Pui',
      price: 19.00,
      category: "meniuri",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Salata Mexicana',
      price: 12.99,
      category: "salate",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Chocolate Mousse',
      price: 7.50,
      category: "desert",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Supa crema de rosii',
      price: 7.00,
      category: "supe",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Pizza Chorizo',
      price: 24.00,
      category: "pizza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Spaghete Carbonara',
      price: 16.9,
      category: "paste",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Pizza Safari',
      price: 12.9,
      category: "pizza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Cheesecake',
      price: 8.0,
      category: "desert",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('products', null, {});
    */
  }
};
