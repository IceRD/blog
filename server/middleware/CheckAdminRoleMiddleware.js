const t = require("@lang");
const jwt = require("jsonwebtoken");
const userRoleIds = require("@constants/userRoleIds");

const CheckAdminRoleMiddleware = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401);
      res.json({ message: t.USER_NOT_AUTHORIZED, error: true });
      return res;
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded.role_id !== userRoleIds["ADMIN"]) {
      res.status(403);
      res.json({ message: t.USER_NOT_AUTHORIZED, error: true });
      return res;
    }

    req.user = decoded;

    next();
  } catch (e) {
    res.status(403);
    res.json({ message: t.USER_NOT_AUTHORIZED, error: true });
    return res;
  }
};

module.exports = CheckAdminRoleMiddleware;
