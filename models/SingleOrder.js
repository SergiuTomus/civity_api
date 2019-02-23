'use strict';
module.exports = (sequelize, DataTypes) => {
  const SingleOrder = sequelize.define('SingleOrder', {
    full_order_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    client_name: DataTypes.STRING,
    total_price: DataTypes.DOUBLE
  }, {});
  SingleOrder.associate = function (models) {
    // associations can be defined here
  };
  return SingleOrder;
};