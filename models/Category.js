'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    restaurant_id: DataTypes.INTEGER,
  }, {});
  Category.associate = function (models) {
    // associations can be defined here
    Category.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
    Category.hasMany(models.Product, { foreignKey: 'category_id' });
  };
  return Category;
};