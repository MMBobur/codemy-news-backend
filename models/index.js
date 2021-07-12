const dbconfig = require('./config/dbConfig')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect:dbConfig.dialect,
    port: dbconfig.port,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.categories = require('../src/category/model')(sequelize, Sequelize)
module.exports =db;