const express = require("express");
const router = express.Router();
const categoryRouter = require("./category/router");
const newsRouter = require("./news/router");
const usersRouter = require("./users/router");
const adminRouter = require("./admin/router");

router.use("/category", categoryRouter);
router.use("/news", newsRouter);
router.use("/users", usersRouter);
router.use("/admin", adminRouter);

module.exports = router;
