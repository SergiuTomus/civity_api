'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product_Order = sequelize.define('Product_Order', {
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    single_price: DataTypes.DOUBLE
  }, {});
  Product_Order.associate = function(models) {
    // associations can be defined here
  };
  return Product_Order;
};