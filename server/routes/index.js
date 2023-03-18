const Router = require("express");
const router = new Router();

const userRouter = require("./user");
const postRouter = require("./post");

router.use("/user", userRouter);
router.use("/post", postRouter);

module.exports = router;
