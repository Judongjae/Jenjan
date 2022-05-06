const { resolveInclude } = require("ejs");
const db = require("../../config/db");
const sql = "INSERT INTO practice(yy) VALUES('yoyo')";

const output = {
  home: (req, res) => {
    res.send("home");
  },
  login: (req, res) => {
    return new Promise((res, rej) => {
      const query = "SELECT * FROM practice;";
      db.query(query, (err, data) => {
        console.log(data);
      });
    });
  },
};

const process = {
  login: (req, res) => {
    db.query("SELECT * FROM practice;", (err, data) => {
      console.log(data);
      res.send("post login");
    });
  },
};

// const process = {
//   login: (req, res) => {
//     const { yy } = req.body;
//     console.log(`${yy}`);
//     res.send(`${yy}`);
//   },
// };

const query = "INSERT INTO practice (yy) VALUES (?);";

module.exports = {
  output,
  process,
};
