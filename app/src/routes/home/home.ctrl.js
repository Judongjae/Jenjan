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
    const { name } = req.body;
    console.log(`${name}`);
    res.send(`${name}`);
  },
};

module.exports = {
  output,
  process,
};
