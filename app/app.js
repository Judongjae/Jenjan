"use strict";

//모듈
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const passport = require("passport");
const passportConfig = require("./src/passport");
const session = require("express-session");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

passportConfig();
dotenv.config();
//라우팅
const home = require("./src/routes/home");
const cookieParser = require("cookie-parser");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", home);

module.exports = app;
