const express = require('express');
const app = express();
const db = require('../models/index');
const router = require('./category/router')

const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', router)

db.sequelize.sync().

app.listen(port,()=>{
    console.log(`${port} port eshitilyapti`);
})