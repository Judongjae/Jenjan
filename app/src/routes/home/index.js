"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/post", ctrl.output.posts);
router.get("/post/:idx", ctrl.output.post);
router.get("/comment", ctrl.output.comments);
router.get("/comment/:idx", ctrl.output.comment);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/post", ctrl.process.post);
router.post("/comment", ctrl.process.comment);

module.exports = router;
