const db = require("../../config/db");
const User = require("../../model/User");

const output = {
  home: (req, res) => {
    res.send("home");
  },
  login: (req, res) => {
    db.query("SELECT * FROM user;", (err, data) => {
      console.log(data);
      res.send(data);
    });
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const reponse = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const reponse = await user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
