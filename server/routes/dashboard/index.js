const Router = require("express");
const router = new Router();

const CheckAdminRoleMiddleware = require("@middleware/CheckAdminRoleMiddleware");

router.get("/", CheckAdminRoleMiddleware, function (_, res) {
  res.json({ message: "dashboard", error: false });
});

module.exports = router;
