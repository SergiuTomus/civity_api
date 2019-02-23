'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeliveryAddress = sequelize.define('DeliveryAddress', {
    address: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {});
  DeliveryAddress.associate = function (models) {
    // associations can be defined here
  };
  return DeliveryAddress;
};