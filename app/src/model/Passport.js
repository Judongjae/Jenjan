const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
//const Users=

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "pw",
        session: true,
        passReqToCallback: false,
      },
      (id, password, done) => {
        const query = "select * from user where id = ?;";
        db.query(query, [id], (err, data) => {
          if (err) reject(`${err}`);
          else resolve(data[0]);
          console.log(data[0]);
        });
      }
    )
  );
};
