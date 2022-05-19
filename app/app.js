"use strict";

const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
// const passportConfig = require('./passport')
const app = express();

dotenv.config();

const home = require("./src/routes/home");
// const res = require("express/lib/response");

app.use(
  session({ secret: "비밀코드", resave: true, saveUninitialized: false })
); //세션 활성화
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); //세션 연결
// passportConfig()
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
