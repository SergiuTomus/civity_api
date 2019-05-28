'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      restaurant_id: 1,
      name: 'Meniu ceafa grill',
      price: 17.99,
      image_url: 'img/alloro/meniu-ceafa.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Meniu cascaval pane',
      price: 16.99,
      image_url: 'img/alloro/meniu-cascaval-pane.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Meniu cheese finger',
      price: 16.99,
      image_url: 'img/alloro/meniu-cheesefinger.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Meniu carnaciori',
      price: 15.99,
      image_url: 'img/alloro/meniu-carnaciori.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Meniu piept pui grill',
      price: 17.99,
      image_url: 'img/alloro/meniu-piept-pui.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Meniu snitel pui',
      price: 16.99,
      image_url: 'img/alloro/meniu-snitzel-pui.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Pizza Prosciutto',
      price: 13.99,
      image_url: 'img/alloro/prosciutto.jpg',
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Pizza Tricolore',
      price: 15.99,
      image_url: 'img/alloro/tricolore.jpg',
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Pizza Quatro stagioni',
      price: 17.99,
      image_url: 'img/alloro/4-stagioni.jpg',
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Pizza Capriciosa',
      price: 15.99,
      image_url: 'img/alloro/capriciosa.jpg',
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Pizza Peperoni',
      price: 15.99,
      image_url: 'img/alloro/peperoni.jpg',
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Pizza Primavera',
      price: 17.99,
      image_url: 'img/alloro/primavera.jpg',
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Paste Carbonara',
      price: 19.99,
      image_url: 'img/alloro/carbonara.jpg',
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Paste All Tonno',
      price: 19.99,
      image_url: 'img/alloro/all-tonno.jpg',
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Paste Arrabiata',
      price: 15.99,
      image_url: 'img/alloro/arabiata.jpg',
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Paste Pomodoro',
      price: 15.99,
      image_url: 'img/alloro/all-pomodoro.jpg',
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Paste Cipolatta',
      price: 18.99,
      image_url: 'img/alloro/cipolata.jpg',
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Paste All Funghi',
      price: 16.99,
      image_url: 'img/alloro/all-funghi.jpg',
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Cartofi prajiti',
      price: 4.99,
      image_url: 'img/alloro/cartofi-pai.jpg',
      category_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Cartofi wedges',
      price: 5.99,
      image_url: 'img/alloro/cartofi-wedges.jpg',
      category_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Orez cu ciuperci',
      price: 5.99,
      image_url: 'img/alloro/orez-ciuperci.jpg',
      category_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Ciuperci sote',
      price: 6.99,
      image_url: 'img/alloro/ciuperci-sote.jpg',
      category_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Legume sote',
      price: 6.99,
      image_url: 'img/alloro/legume-sote.jpg',
      category_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Legume la grill',
      price: 7.99,
      image_url: 'img/alloro/legume-gratar.jpg',
      category_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Salata Greceasca',
      price: 16.99,
      image_url: 'img/alloro/s-greceasca.jpg',
      category_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Salata Fresh',
      price: 14.99,
      image_url: 'img/alloro/s-fresh.jpg',
      category_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Salata Somon Fume',
      price: 20.99,
      image_url: 'img/alloro/s-somon.jpg',
      category_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Salata de muraturi',
      price: 2.99,
      image_url: 'img/alloro/muraturi.jpg',
      category_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Salata asortata',
      price: 2.99,
      image_url: 'img/alloro/salata-asortata.jpg',
      category_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: 'Salata de varza',
      price: 2.99,
      image_url: 'img/alloro/varza.jpg',
      category_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Meniu Souvlaki',
      price: 17.99,
      image_url: 'img/alloro/souvlaki.png',
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Meniu Crispy',
      price: 18.99,
      image_url: 'img/alloro/meniu_crispi.png',
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Meniu Snitel',
      price: 17.99,
      image_url: 'img/alloro/meniu_snitel.png',
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Platou Persia',
      price: 19.99,
      image_url: 'img/alloro/platou_persia.png',
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Leonidas',
      price: 15.99,
      image_url: 'img/alloro/leonidas.png',
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Cheese Gyros',
      price: 17.99,
      image_url: 'img/alloro/cheese_gyros.png',
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Burger Gyros',
      price: 13.99,
      image_url: 'img/alloro/burger-gyros.png',
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Gyros Puisor',
      price: 15.99,
      image_url: 'img/alloro/gyros.png',
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: 'Snitel Pita',
      price: 14.99,
      image_url: 'img/alloro/snitel_pita.png',
      category_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 2,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
      image_url: 'img/alloro/.jpg',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_id: 1,
      name: '',
      price: 0.99,
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
