'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    restaurant_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image_url: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
    Product.belongsTo(models.Category, { foreignKey: 'category_id' });
  };
  return Product;
};