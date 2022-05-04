const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const home = require("./src/routes/home");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", home);

module.exports = app;
