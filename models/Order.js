'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER,
    restaurant_user_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    total_price: DataTypes.DOUBLE
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};