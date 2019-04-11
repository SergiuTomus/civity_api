'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product_Order = sequelize.define('Product_Order', {
    product_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    single_price: DataTypes.DOUBLE
  }, {});
  Product_Order.associate = function (models) {
    // associations can be defined here
    Product_Order.belongsTo(models.Order, { foreignKey: 'order_id' });
  };
  return Product_Order;
};