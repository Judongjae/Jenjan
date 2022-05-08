const db = require("../../config/db");
const UserStorage = require("../../model/UserStorage");

const output = {
  home: (req, res) => {
    res.send("home");
  },
  login: (req, res) => {
    db.query("SELECT * FROM practice;", (err, data) => {
      console.log(data);
      res.send(data);
    });
  },
};

const process = {
  login: async (req, res) => {
    const user = new UserStorage(req.body);
    const reponse = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new UserStorage(req.body);
    const reponse = await user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
