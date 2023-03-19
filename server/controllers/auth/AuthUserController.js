const UserController = require("@controllers/auth/UserController");

class AuthUserController extends UserController {
  constructor() {
    super();

    this.__invoke = this.__invoke.bind(this);
  }

  async __invoke(req, res) {
    const token = this.generateToken(req.user);

    return res.json({ token, error: false });
  }
}

module.exports = new AuthUserController();
