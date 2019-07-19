const Order = require('../../models').Order;
const Product_Order = require('../../models').Product_Order;
const Restaurant = require('../../models').Restaurant;

// @route   POST client/order
// @detail  send order
// @access  Private
exports.createOrder = (req, res, next) => {
  Order.create({
    user_id: req.user.id,
    user_name: req.body.user_name,
    user_phone: req.body.user_phone,
    delivery_address: req.body.delivery_address,
    restaurant_id: req.body.restaurant_id,
    restaurant_user_id: null,
    status: 'in asteptare',
    total_price: req.body.total_price,
    createdAt: new Date(),
    updatedAt: new Date()
  })
    .then(order => {
      req.body.product_orders.map((product) => {
        order.createProduct_Order({
          product_id: product.product_id,
          product_name: product.product_name,
          single_price: product.single_price,
          order_id: order.id,
          createdAt: new Date(),
          updatedAt: new Date()
        })
          .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
          });
      });
      res.status(200).json({
        message: "Comanda a fost trimisa cu succes"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// @route   GET client/user-orders/:userId
// @detail  Return all the orders from one user
// @access  Private
exports.getUserOrders = (req, res, next) => {
  Order.findAll({
    // req.user.id, 
    attributes: { exclude: ['user_phone', 'delivery_address', 'restaurant_user', 'createdAt', 'updatedAt'] },
    include: [{
      model: Restaurant,
      attributes: ['name'],
    }, {
      model: Product_Order,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    }],
    where: {
      user_id: req.params.userId,
    }
  })
    .then(orders => {
      res.status(200).json({
        user_orders: orders
      });

      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};