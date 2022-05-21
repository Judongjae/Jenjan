"use strict";

//모듈
const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const app = express();

dotenv.config();
//라우팅
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(
  session({ secret: "비밀코드", resave: true, saveUninitialized: false })
); //세션 활성화
app.use(passport.initialize()); // passport를 사용한다고 express에게 알린다.
app.use(passport.session()); //session을 사용하여 passport를 동작시킨다고 express에게 알린다.
// passportConfig()
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(`${__dirname}/src/public`));
//dirname은 현재 app.js파일이 있는 위치를 반환한다.
//위치 안에 있는 src 안의 public폴더라는 뜻
app.use("/", home);

module.exports = app;
