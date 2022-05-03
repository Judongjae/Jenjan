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
    const { name } = req.query;
    res.send(`hello ${name}`);
  },
};

module.exports = {
  output,
  process,
};
