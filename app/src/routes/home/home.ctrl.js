const db = require("../../config/db");
const sql = "INSERT INTO practice(yy) VALUES('yoyo')";

const output = {
  home: (req, res) => {
    res.send("home");
  },
  login: (req, res) => {
    res.send("login");
  },
};

const process = {
  login: (req, res) => {
    const { yy } = req.body;
    console.log(`${yy}`);
    res.send(`${yy}`);
  },
};

module.exports = {
  output,
  process,
};
