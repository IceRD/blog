const ApiError = require("@error/ApiError");
const t = require("@lang");

const ErrorMiddleware = function (err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.status);
    res.json({ message: err.message, error: true });
    return res;
  }

  res.status(500);
  res.json({ message: t.UNEXPECTED_ERROR, error: true });
  return res;
};

module.exports = ErrorMiddleware;
