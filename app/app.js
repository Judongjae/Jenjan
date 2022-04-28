const express = require("express");
const dotenv = require("dotenv");
// const morgan = require("morgan");
// const logger = require("");
const app = express();
const router = express.Router();
dotenv.config();

app.get("/", (req, res) => {
  res.send("yy");
});

module.exports = app;
