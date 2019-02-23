'use strict';
module.exports = (sequelize, DataTypes) => {
  const Operator = sequelize.define('Operator', {
    restaurant_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Operator.associate = function (models) {
    // associations can be defined here
  };
  return Operator;
};