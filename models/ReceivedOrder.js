'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReceivedOrder = sequelize.define('ReceivedOrder', {
    operator_id: DataTypes.INTEGER,
    full_order_id: DataTypes.INTEGER,
    delivery_estimate: DataTypes.STRING,
    completed: DataTypes.STRING
  }, {});
  ReceivedOrder.associate = function (models) {
    // associations can be defined here
  };
  return ReceivedOrder;
};