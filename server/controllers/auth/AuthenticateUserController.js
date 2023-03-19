const ApiError = require("@error/ApiError");

class AuthUserController {
  async __invoke(req, res, next) {
    if (true) {
      return next(ApiError.badRequest("Не задан ID"));
    }
  }
}

module.exports = new AuthUserController();
