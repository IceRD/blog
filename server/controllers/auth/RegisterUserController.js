const UserController = require("@controllers/auth/UserController");
const t = require("@lang");
const { User } = require("@models");

class RegisterUserController extends UserController {
  constructor() {
    super();

    this.__invoke = this.__invoke.bind(this);
  }

  async __invoke(req, res, next) {
    const { login, password, password_confirmation } = req.body;

    if (!login || !password || password !== password_confirmation) {
      return next(this.ApiError.badRequest(t.INCORRECT_AUTH_DATA));
    }

    const isUser = await User.findOne({ where: { login } });

    if (isUser) {
      return next(this.ApiError.badRequest(t.USER_ALREADY_REGISTERED));
    }

    const hashPassword = this.hash(password);

    const user = await User.create({ login, password: hashPassword });

    const token = this.generateJwt(user);

    return res.json({ token, error: false });
  }
}

module.exports = new RegisterUserController();
