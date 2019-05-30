'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    phone: DataTypes.STRING,
    image_url: DataTypes.STRING,
    minimum_order: DataTypes.INTEGER,
    cost_delivery: DataTypes.INTEGER,
    week_program: DataTypes.STRING,
    saturday_program: DataTypes.STRING,
    sunday_program: DataTypes.STRING
  }, {});
  Restaurant.associate = function (models) {
    // associations can be defined here
    Restaurant.hasMany(models.Category, { foreignKey: 'restaurant_id' });
    Restaurant.hasMany(models.Order, { foreignKey: 'restaurant_id' });
  };
  return Restaurant;
};