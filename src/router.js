const express = require("express");
const router = express.Router();
const News = require("./news/router");

router.use("/news",News);

module.exports = router;
