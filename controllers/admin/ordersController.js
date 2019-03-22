const Order = require('../../models').Order;
const User = require('../../models').User;

// @route   GET admin/new-orders/:restaurantId
// @detail  Return new orders
// @access  Private
exports.getNewOrders = (req, res, next) => {
  Order.findAll({
    // req.user.id,     // from passport middleware
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    where: {
      restaurant_id: req.params.restaurantId
      // status: "in asteptare"
    }
  })
    .then(orders => {
      User.findByPk(
        orders.user_id,
        {
          attributes: ['name', 'phone']
        }
      )
        .then(user => {
          res.status(200).json({
            user: user,
            orders: orders
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
  //   .then(user => {

  //       .then((restaurant) => {
  // res.status(200).json({
  //   message: "foarte bine"
  // user: { user_status: user.status, user_phone: user.phone },
  // restaurant: restaurant
  // });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).json({ error: err });
  //     });
  // })
  // .catch(err => {
  //   console.log(err);
  //   res.status(500).json({ error: err });
  // });
};