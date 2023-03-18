const Router = require("express");
const router = new Router();

router.post("/login");

router.post("/register");

router.get("/auth");

router.get("/logout");

module.exports = router;
