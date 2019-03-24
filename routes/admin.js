const express = require('express');
const router = express.Router();
const passport = require('passport');
const productsController = require('../controllers/admin/productsController');
const restaurantUserController = require('../controllers/admin/restaurantUserController');
const ordersController = require('../controllers/admin/ordersController');

//////// ADMIN ROUTES ////////
router.post('/login', restaurantUserController.loginUser);
router.get('/user', passport.authenticate('jwt', { session: false }), restaurantUserController.getRestaurantUser);

router.get('/new-orders/:restaurantId', ordersController.getNewOrders); // createOrders
router.get('/orders', ordersController.createOrders);

router.get('/products', productsController.getAllProducts);
router.post('/products', productsController.createProduct);
router.get('/products/:productId', productsController.getProduct);
router.patch('/products/:productId', productsController.updateProduct);
router.delete('/products/:productId', productsController.deleteProduct);


module.exports = router;