const express = require("express");
const router = express.Router();

const categoryRouter = require("./category/router");
const newsRouter = require("./news/router");
const usersRouter = require("./users/router");
const adminRouter = require("./admin/router");
const onlyUser = require('./users/onlyUser')

router.use("/category", categoryRouter);
router.use("/news", newsRouter);
router.use("/users", usersRouter);
router.use("/admin", adminRouter);
router.get('/user', onlyUser)
module.exports = router;
