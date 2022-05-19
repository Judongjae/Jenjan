const db = require("../../config/db");
const User = require("../../model/User");
const Post = require("../../model/Post");
const Comment = require("../../model/Comment");

const output = {
  home: (req, res) => {
    res.cookie("cookietv", "set cookie");
    console.log(req.cookies);
    res.send("home");
  },
  login: (req, res) => {
    db.query("SELECT * FROM user;", (err, data) => {
      console.log(data);
      res.send(data);
    });
  },
  posts: (req, res) => {
    db.query("SELECT * FROM board;", (err, data) => {
      console.log(data);
      res.send(data);
    });
  },
  post: (req, res) => {
    const idx = req.params.idx;
    console.log(idx);
    db.query("SELECT * FROM board where idx=?;", [idx], (err, data) => {
      console.log(data);
      res.send(data);
    });
  },
  comments: (req, res) => {
    db.query("SELECT * FROM comments;", (err, data) => {
      console.log(data);
      res.send(data);
    });
  },
  comment: (req, res) => {
    const idx = req.params.idx;
    console.log(idx);
    db.query("SELECT * FROM comments where idx = ?;", [idx], (err, data) => {
      console.log(data);
      res.send(data);
    });
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const reponse = await user.login();
    return res.json("로그인");
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const reponse = await user.register();
    return res.json("회원가입");
  },
  post: async (req, res) => {
    const post = new Post(req.body);
    const response = await post.post();
    return res.json("게시글작성");
  },
  comment: async (req, res) => {
    const comment = new Post(req.body);
    const response = await comment.comment();
    return res.json("댓글작성");
  },
};

module.exports = {
  output,
  process,
};
