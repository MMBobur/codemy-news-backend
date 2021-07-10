const dbConfig = require("../config/config");

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    port:dbConfig.port,
    pool:{
        max:dbConfig.max,
        min:dbConfig.min,
        acquire:dbConfig.pool.idle

    }
}) ;

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('../src/users/model')(sequelize,Sequelize)

module.exports = db;