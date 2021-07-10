const express = require("express");
const appRouter = require("./router");
const app = express();
const db = require("../models/index");
db.sequelize.sync();

const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/", appRouter);

app.listen(port, () => {
  console.log(
    `${port} portni eshityapman... `
  );
});

module.exports = app;
