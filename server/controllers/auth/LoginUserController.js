class LoginUserController {
  async __invoke(req, res, next) {
    res.json("1");
  }
}

module.exports = new LoginUserController();
