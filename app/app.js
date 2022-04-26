const express = require("express");
const dotenv = require("dotenv");
const { response } = require("express");
// const morgan = require("morgan");
// const logger = require("");
const app = express();
const router = express.Router();
dotenv.config();

const port = 3000;

app.listen(port, () => {
  console.log("서버가 실행됨");
});

app.get("/", (req, res) => {
  response.send("yy");
});
