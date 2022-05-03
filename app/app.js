const express = require("express");
const dotenv = require("dotenv");
const app = express();
const home = require("./src/routes/home");
const bodyParser = require("body-parser");

dotenv.config();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", home);

module.exports = app;
