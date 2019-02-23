'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductOrder = sequelize.define('ProductOrder', {
    product_id: DataTypes.INTEGER,
    single_order_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    single_price: DataTypes.DOUBLE
  }, {});
  ProductOrder.associate = function(models) {
    // associations can be defined here
  };
  return ProductOrder;
};