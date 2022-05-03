const express = require("express");
const dotenv = require("dotenv");
const app = express();
const home = require("./src/routes/home");

dotenv.config();

app.use("/", home);

module.exports = app;
