'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant_User = sequelize.define('Restaurant_User', {
    restaurant_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Restaurant_User.associate = function (models) {
    // associations can be defined here
  };
  return Restaurant_User;
};