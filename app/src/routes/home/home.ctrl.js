const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index"); //home이 실행되면 home/index.ejs가 렌더링된다.
  },
  login: (req, res) => {
    res.render("home/login"); //login이 실행되면 home/login.ejs가 렌더링된다.
  },
  register: (req, res) => {
    res.render("home/register"); //register이 실행되면 home/register.ejs가 렌더링된다.
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
