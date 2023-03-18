"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      login: { type: DataTypes.STRING, unique: true },
      password: { type: DataTypes.STRING },
      role_id: { type: DataTypes.INTEGER, defaultValue: 1 },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
