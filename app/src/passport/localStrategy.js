const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require(bcrypt);
const db = require("../config/db");
const UserStorage = require("./UserStorage");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "password",
        session: true,
        passReqToCallback: false,
      },
      async (id, password, done) => {
        try {
          console.log(id);
          const query = "select * from user where id = ?;";
          db.query(query, [id], (err, data) => {
            if (err) return done(err);
            if (!data)
              return done(null, false, {
                message: "존재하지 않는 아이디입니다.",
              });
            else {
              console.log("여기까지 옴", data);
              return done(null, user);
            }
          });
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
