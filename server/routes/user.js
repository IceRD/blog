const Router = require("express");
const router = new Router();

const AuthMiddleware = require("@middleware/AuthMiddleware");

const RegisterUserController = require("@controllers/auth/RegisterUserController");
const LoginUserController = require("@controllers/auth/LoginUserController");
const AuthUserController = require("@controllers/auth/AuthUserController");

router.post("/register", RegisterUserController.__invoke);
router.post("/login", LoginUserController.__invoke);
router.get("/auth", AuthMiddleware, AuthUserController.__invoke);

module.exports = router;
