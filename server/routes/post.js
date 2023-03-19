const Router = require("express");
const router = new Router();

const IndexPostController = require("@controllers/post/IndexPostController");

router.get("/", IndexPostController.__invoke);

module.exports = router;
