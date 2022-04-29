const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home); //'/'이 위치에 get으로 오면 ctrl.output.home을 실행한다.
router.get("/login", ctrl.output.login); //'/'이 위치에 get으로 오면 ctrl.output.login을 실행한다.
router.get("/register", ctrl.output.register); //'/'이 위치에 get으로 오면 ctrl.output.register을 실행한다.

router.post("/login", ctrl.process.login); //'/'이 위치에 post으로 오면 ctrl.process.login을 실행한다.
router.post("/register", ctrl.process.register); //'/'이 위치에 post으로 오면 ctrl.process.register을 실행한다.

module.exports = router;
