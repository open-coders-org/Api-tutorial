'use strict'
const db = require('mysql-promise')();
const DB = require('../conf/db')
db.configure(DB)


module.exports = {
    db
}