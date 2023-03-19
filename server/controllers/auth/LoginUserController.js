const UserController = require("@controllers/auth/UserController");
const t = require("@lang");
const { User } = require("@models");
class LoginUserController extends UserController {
  constructor() {
    super();

    this.__invoke = this.__invoke.bind(this);
  }

  async __invoke(req, res, next) {
    const { login, password } = req.body;

    if (!login || !password) {
      return next(this.ApiError.badRequest(t.INCORRECT_AUTH_DATA));
    }

    const user = await User.findOne({ where: { login } });

    if (!user) {
      return next(this.ApiError.internal(t.AUTH_COMBINATION_MISSING));
    }

    const comparePassword = await this.compare(password, user.password);

    if (!comparePassword) {
      return next(this.ApiError.internal(t.AUTH_COMBINATION_MISSING));
    }

    const token = this.generateJwt(user);

    return res.json({ token, error: false });
  }
}

module.exports = new LoginUserController();
