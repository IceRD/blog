const ApiError = require("@error/ApiError");

class Controller {
  constructor() {
    this.ApiError = ApiError;
  }
}

module.exports = Controller;
