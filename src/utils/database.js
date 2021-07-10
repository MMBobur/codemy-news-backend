const Sequelize = require("sequelize");

const sequelize = new Sequelize("news_website", "root", "1234", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;