const ApiError = require("@error/ApiError");
const t = require("@lang");

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, error: true });
  }

  return res.status(500).json({ message: t.UNEXPECTED_ERROR, error: true });
};
