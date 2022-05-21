"use strict";

//모듈
const express = require("express");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

dotenv.config();
//라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);

module.exports = app;
