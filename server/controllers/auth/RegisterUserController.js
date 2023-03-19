const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("@error/ApiError");
const t = require("@lang");
const { User } = require("@models");

class RegisterUserController {
  async __invoke(req, res, next) {
    const { login, password, password_confirmation } = req.body;

    if (!login || !password || password !== password_confirmation) {
      return next(ApiError.badRequest(t.INCORRECT_REGISTRATION));
    }

    const isUser = await User.findOne({ where: { login } });

    if (isUser) {
      return next(ApiError.badRequest(t.USER_ALREADY_REGISTERED));
    }

    const hashPassword = await bcrypt.hash(password, 3);

    const user = await User.create({ login, password: hashPassword });

    const token = jwt.sign(
      { id: user.id, login: user.login, role_id: user.role_id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res.json({ token });
  }
}

module.exports = new RegisterUserController();
