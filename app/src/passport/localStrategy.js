const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("../config/db");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "password",
      },
      async (id, password, done) => {
        try {
          const ju = db.query(
            "select * from users where id = ?;",
            [id],
            (err, data) => {
              if (err) reject(`${err}`);
              if (data) {
                done(null, ju);
              }
            }
          );
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
