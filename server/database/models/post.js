"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User);
      models.User.hasMany(Post);
    }
  }

  Post.init(
    {
      title: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT },
      image: { type: DataTypes.STRING, allowNull: true },
      is_published: { type: DataTypes.INTEGER, defaultValue: 1 },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );

  return Post;
};
