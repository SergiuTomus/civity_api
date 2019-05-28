'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/cartofi-pai.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/cartofi-wedges.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/ciuperci-sote.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/legume-gratar.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/legume-sote.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/orez-ciuperci.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 19.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
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
