const Controller = require("@controllers/Controller");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserController extends Controller {
  constructor() {
    super();

    this.generateJwt = this.generateJwt.bind(this);
    this.hash = this.hash.bind(this);
    this.compare = this.compare.bind(this);
  }

  generateJwt(user) {
    return jwt.sign(
      { id: user.id, login: user.login, role_id: user.role_id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
  }

  hash(password) {
    return bcrypt.hash(password, 3);
  }

  compare(password, password2) {
    return bcrypt.compare(password, password2);
  }
}

module.exports = UserController;
