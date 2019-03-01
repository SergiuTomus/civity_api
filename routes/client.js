const express = require('express');
const router = express.Router();
const passport = require('passport');
const restaurantsController = require('../controllers/client/restaurantsController');
const usersController = require('../controllers/client/usersController');

//////// CLIENT ROUTES ////////

router.get('/restaurants', restaurantsController.getAllRestaurants);
router.get('/restaurants/:restaurantId', restaurantsController.getRestaurantProducts);

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.get('/user', passport.authenticate('jwt', { session: false }), usersController.getCurrentUser);


module.exports = router;