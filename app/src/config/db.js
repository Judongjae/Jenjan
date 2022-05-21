const mysql = require("mysql");

const db = mysql.createConnection({
  host: "jenjan.c760ftrzvjev.ap-northeast-2.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "success185",
  database: "jenjan",
});

db.connect();

module.exports = db;
