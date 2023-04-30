"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Products.hasMany(models.Variants);
    }
  }
  Products.init(
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.FLOAT,
      is_published: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
