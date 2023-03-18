const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Post = sequelize.define("posts", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING, allowNull: true },
    is_published: { type: DataTypes.INTEGER, defaultValue: 1 },
  });

  return Post;
};
