'use strict';
module.exports = (sequelize, DataTypes) => {
  const Delivery_Address = sequelize.define('Delivery_Address', {
    address: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {});
  Delivery_Address.associate = function (models) {
    // associations can be defined here
  };
  return Delivery_Address;
};