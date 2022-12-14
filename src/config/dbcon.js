"use strict";

const mysql = require('mysql');
const config = require("./config.json");

const conn = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

conn.connect;

module.exports = conn;