"use strict";

const express = require("express");
const passport = require("passport");
const router = express.Router();
const ctrl = require("./home.ctrl");
// const flash = require('connect-flash');

router.get("/house", ctrl.output.house); // 위에 app.set에 src/views로 설정을 해놨기에 home/index라 해도 된다.
router.get("/login", ctrl.output.login);
router.get("/users", ctrl.output.users);
router.get("/post", ctrl.output.posts);
router.get("/post/:idx", ctrl.output.post);
router.get("/comment", ctrl.output.comments);
router.get("/comment/:idx", ctrl.output.comment);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    successFlash: "welcome",
    failureFlash: true,
  })
); //login으로 접속시 passport에서 제공하는 api가 작동한다.
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/post", ctrl.process.post);
router.post("/comment", ctrl.process.comment);

module.exports = router;
