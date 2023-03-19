const Router = require("express");
const router = new Router();

const LoginUserController = require("@controllers/auth/LoginUserController");
const RegisterUserController = require("@controllers/auth/RegisterUserController");
const AuthenticateUserController = require("@controllers/auth/AuthenticateUserController");
const LogoutUserController = require("@controllers/auth/LogoutUserController");

router.post("/login", LoginUserController.__invoke);

router.post("/register", RegisterUserController.__invoke);

router.get("/auth", AuthenticateUserController.__invoke);

router.get("/logout", LogoutUserController.__invoke);

module.exports = router;
