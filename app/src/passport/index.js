const passport = require("passport");
const local = require("./localStrategy");
const db = require("../config/db");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  }); //로그인할 때 한 번 실행되는 함수

  passport.deserializeUser((id, done) => {
    db.query("SELECT * FROM users where id=?;", [id], (err, data) => {
      console.log(data);
      res.send(data);
    })
      .then((user) => done(null, user))
      .catch((err) => done(err)); //deserialize done에 넣어줬던게 req.user가 된다.
  }); //모든 요청에 다 실행되는 것
  local();
};
