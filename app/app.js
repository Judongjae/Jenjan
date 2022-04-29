const express = require("express");
const dotenv = require("dotenv");
// const morgan = require("morgan");
// const logger = require("");
const app = express();
dotenv.config();

const home = require("./src/routes/home"); //home은 저 위치에 있다

app.set("views", "./src/views"); //view 엔진경로
app.set("view engine", "ejs");
app.use("/", home); // '/'여기로 오면 home이 실행된다.
module.exports = app;
