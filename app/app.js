"use strict";

const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config();

const home = require("./src/routes/home");
// const res = require("express/lib/response");

app.use(cookieParser("cookietv"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", home);

const cookieConfig = {
  maxAge: 3,
};

// 쿠키설정
app.get("/set", (req, res) => {
  res.cookie("key", "value", cookieConfig);
  res.send("set cookie");
});

//쿠키 확인
app.get("/get", (req, res) => {
  res.send(req.cookies);
});

module.exports = app;
