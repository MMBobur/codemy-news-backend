const express = require("express");
const appRouter = require("./router");
const app = express();
const db = require("./model/index");

db.sequelize.sync();

const port = 3000

app.use('/image', express.static('image'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", appRouter);

app.listen(port, () => {
  console.log(
    `${port} portni eshitmoqdaman... `
  );
});

module.exports = app;