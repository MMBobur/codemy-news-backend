const Sequelize = require("sequelize");

const sequelize = new Sequelize("news_website", "root", "", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;