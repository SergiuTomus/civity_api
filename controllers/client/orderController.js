const Order = require('../../models').Order;

// @route   POST client/order
// @detail  send order
// @access  Private
exports.createOrder = (req, res, next) => {
  Order.create({
    user_id: 3,
    user_name: 'Sebastian Dobrincu',
    user_phone: '0728649258',
    delivery_address: "str. Menker, nr. 35",
    restaurant_id: 1,
    restaurant_user_id: null,
    status: 'in asteptare',
    total_price: 60.00,
    createdAt: new Date(),
    updatedAt: new Date()
  })
    .then(order => {
      order.createProduct_Order({
        product_id: 1,
        product_name: "Pizza Quatro Stagioni",
        quantity: 3,
        single_price: 20.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }).then(productOrder => {
        res.status(200).json({
          order: order,
          product_order: productOrder
        });
      })
        .catch(err => {
          console.log(err);
          res.status(500).json({ error: err });
        });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};