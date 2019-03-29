const Restaurant = require('../../models').Restaurant;
const Category = require('../../models').Category;
const Product = require('../../models').Product;

// @route   GET client/restaurants
// @detail  Return all restaurants
// @access  Public
exports.getAllRestaurants = (req, res, next) => {
  const today = new Date();
  let day = today.getDay();
  const hour = today.getHours();

  let program = 'week_program';
  if (day == 6) program = "saturday_program";
  if (day == 7) program = "sunday_program";

  Restaurant.findAll({
    attributes: ['id', 'name', 'description', 'image_url', 'minimum_order', 'cost_delivery', program]
  })
    .then((rows) => {
      const response = {
        restaurants: rows.map(row => {
          let isOpen = (row[program] === 'inchis' ? false : true);
          if (isOpen) {
            startProgram = Number(row[program].slice(0, 2));
            endProgram = Number(row[program].slice(8, 10));
            isOpen = (hour >= startProgram && hour < endProgram ? true : false);
          }
          return {
            id: row.id,
            restaurant_name: row.name,
            description: row.description,
            image_url: row.image_url,
            opened: isOpen,
            minimum_order: row.minimum_order,
            cost_delivery: row.cost_delivery
          }
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// @route   GET client/restaurants/:restaurantId
// @detail  Return restaurant data and categories
// @access  Public
exports.getRestaurant = (req, res, next) => {
  Restaurant.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [{
      model: Category,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    }],
    where: {
      id: req.params.restaurantId
    }
  })
    .then((result) => {
      res.status(200).json({
        restaurant: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// @route   GET client/products/:categoryId
// @detail  Return products by category
// @access  Public
exports.getProducts = (req, res, next) => {
  Category.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [{
      model: Product,
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    }],
    where: {
      restaurant_id: req.params.categoryId
    }
  })
    .then(products => {
      res.status(200).json({
        categories: products
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};