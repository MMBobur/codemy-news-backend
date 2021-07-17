require("dotenv").config()
const express = require("express");
const appRouter = require("./router");
const app = express();
const db = require("./model/index");
const bodyParser = require('body-parser')


db.sequelize.sync({force: true});

const port = 5000

app.use('/image', express.static('image'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", appRouter);

app.listen(port, () => {
  console.log(
    `${port} portni eshitmoqdaman... `
  );
});

module.exports = app;