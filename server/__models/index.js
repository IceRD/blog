const sequelize = require("../database");

const User = sequelize.import("./User");
const Post = sequelize.import("./Post");

module.exports = {
  User,
  Post,
};
