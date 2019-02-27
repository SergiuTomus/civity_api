const express = require('express');
const router = express.Router();
const passport = require('passport');
const productsController = require('../controllers/client/productsController');
const restaurantsController = require('../controllers/client/restaurantsController');
const usersController = require('../controllers/client/usersController');

//////// CLIENT ROUTES ////////

router.get('/products', productsController.getAllProducts);

// router.get('/products/:productId', productsController.getProduct);

router.get('/restaurants', restaurantsController.getAllRestaurants);

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.get('/user', passport.authenticate('jwt', { session: false }), usersController.getCurrentUser);


module.exports = router;