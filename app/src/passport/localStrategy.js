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
      async (id, pw, done) => {
        try {
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
};
