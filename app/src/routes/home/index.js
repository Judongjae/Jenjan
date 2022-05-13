const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/post", ctrl.output.post);
router.get("/post/:idx", ctrl.output.onepost);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/post", ctrl.process.post);

module.exports = router;
