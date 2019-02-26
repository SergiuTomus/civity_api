const express = require('express');
const router = express.Router();
const productsController = require('../controllers/admin/productsController');

//////// ADMIN ROUTES ////////

router.get('/products', productsController.getAllProducts);
router.post('/products', productsController.createProduct);
router.get('/products/:productId', productsController.getProduct);
router.patch('/products/:productId', productsController.updateProduct);
router.delete('/products/:productId', productsController.deleteProduct);


module.exports = router;