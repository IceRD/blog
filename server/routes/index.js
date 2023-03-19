const Router = require("express");
const router = new Router();
const t = require("@lang");

const userRouter = require("./user");
const postRouter = require("./post");
const dashboardRouter = require("./dashboard");

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/dashboard", dashboardRouter);

router.use(function (_, res) {
  res.status(404).json({ message: t.URL_NOT_FOUND, error: true });
});

module.exports = router;
