'use strict';
module.exports = (sequelize, DataTypes) => {
  const FullOrder = sequelize.define('FullOrder', {
    user_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER,
    received_orders_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    total_price: DataTypes.DOUBLE
  }, {});
  FullOrder.associate = function(models) {
    // associations can be defined here
  };
  return FullOrder;
};