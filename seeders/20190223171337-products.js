'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      restaurant_id: 1,
      name: 'Platou Persia Pui',
      price: 19.00,
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Salata Mexicana',
      price: 12.99,
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Chocolate Mousse',
      price: 7.50,
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Supa crema de rosii',
      price: 7.00,
      category_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Pizza Chorizo',
      price: 24.00,
      category_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Spaghete Carbonara',
      price: 16.9,
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Pizza Primavera',
      price: 13,
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Cheesecake',
      price: 8.0,
      category_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 3,
      name: 'Paste Bolognese',
      price: 16.9,
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 3,
      name: 'Pizza Prosciutto',
      price: 13,
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 3,
      name: 'Amandina',
      price: 8.0,
      category_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 4,
      name: 'Paste cu somon fume',
      price: 16.9,
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 4,
      name: 'Pizza Safari',
      price: 13,
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 4,
      name: 'Monique',
      price: 8.0,
      category_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 5,
      name: 'Paste Marinara',
      price: 16.9,
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 5,
      name: 'Pizza Carnivora',
      price: 13,
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 5,
      name: 'Mousse trio zmeura',
      price: 8.0,
      category_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 6,
      name: 'Paste cu creveti',
      price: 16.9,
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 6,
      name: 'Pizza Quattro Formaggi',
      price: 13,
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 6,
      name: 'Prajitura Afine',
      price: 8.0,
      category_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 7,
      name: 'Paste cu pui si ciuperci',
      price: 16.9,
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 7,
      name: 'Pizza Venetia',
      price: 13,
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 7,
      name: 'Savarina',
      price: 8.0,
      category_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 8,
      name: 'Paste cu rosii proaspete',
      price: 16.9,
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 8,
      name: 'Pizza Capriciosa',
      price: 13,
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 8,
      name: 'Passion',
      price: 8.0,
      category_id: 8,
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
