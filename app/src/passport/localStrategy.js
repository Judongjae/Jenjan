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
            //데이터에 값이 들어가 있겠지
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
  //로그인에 성공했을 때 작동한다. 로그인에 성공했을 때 해당 전달받은 user정보를 기반으로 작업을 수행한다.
  //done함수의 2번째 인자로 user의 식별자를 주고, session 데이터에 해당 정보가 저장된다.

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  //serializeUser가 처리된 상태에서 사용자가 여러 페이지에 방문할 때마다 실행된다. done의 두 번째 인자로
  //user 정보 전체를 전달하고, session에 저장된 user식별자를 기반으로 그에 맞는 user를 찾아 활용하게 된다.
  //그렇게 식별된 user가 req.user가 된다. 해당 req의 객체는 passport를 사용했기 때문에 생성되는 객체이다.
  //(해당 객체의 존재여부판단으로 로그인 여부까지 알 수 있다.)
};
