const Order = require('../../models').Order;
const Product_Order = require('../../models').Product_Order;

// @route   GET admin/new-orders/:restaurantId
// @detail  Return new orders
// @access  Private
exports.getNewOrders = (req, res, next) => {
  Order.findAll({
    // req.user.id,     // from passport middleware
    attributes: { exclude: ['restaurant_user_id', 'createdAt', 'updatedAt'] },
    include: [{
      model: Product_Order,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      // required: true
    }],
    where: {
      restaurant_id: req.params.restaurantId,
      status: "in asteptare"
    }
  })
    .then(orders => {
      res.status(200).json({
        new_orders: orders
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// @route   PATCH admin/orders/:orderId
// @detail  Change order status
// @access  Private
exports.updateOrder = (req, res, next) => {
  Order.update(
    { ...req.body },
    {
      where: { id: req.params.orderId }
    }
  )
    .then(result => {
      if (result[0] === 1) {
        res.status(200).json({ message: "Order updated successfully" });
      }
      else {
        res.status(404).json({ message: "Order record not found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

















// Un model cu chei secundare(forenkeys)
exports.createOrders = (req, res, next) => {
  Order.create({
    user_id: 3,
    user_name: 'Sebastian Dobrincu',
    user_phone: '0728649258',
    delivery_address: "str. Menker, nr. 35",
    restaurant_id: 3,
    restaurant_user_id: null,
    status: 'in asteptare',
    total_price: 70.50,
    createdAt: new Date(),
    updatedAt: new Date()
  })
    .then(order => {
      order.createProduct_Order({
        product_id: 1,
        product_name: "Platou Persia Pui",
        quantity: 1,
        single_price: 19.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }).then(ceva => {
        console.log(ceva)
        res.status(200).json({
          ceva: ceva
        });
      }

      )
        .catch(err => {
          console.log(err);
          res.status(500).json({ error: err });
        });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}