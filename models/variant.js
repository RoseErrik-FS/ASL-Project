"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Variants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Variants.belongsTo(models.Products);
      models.Variants.hasMany(models.Images);
    }
  }
  Variants.init(
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.FLOAT,
      inventory: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Variants",
    }
  );
  return Variants;
};
