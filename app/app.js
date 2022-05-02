const express = require("express");
const dotenv = require("dotenv");
// const morgan = require("morgan");
// const logger = require("");
const app = express();
dotenv.config();

app.set("views", "./src/views"); //view 엔진경로
app.set("view engine", "ejs");

module.exports = app;
