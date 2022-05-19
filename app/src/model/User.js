const UserStorage = require("./UserStorage");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  // Strategy 성공 시 호출됨
  done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
});

passport.deserializeUser((user, done) => {
  // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
  done(null, user); // 여기의 user가 req.user가 됨
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
      const client = this.body;
      console.log(client);
      id = client.id;
      password = client.password;
      console.log(password);
      const query = "select * from user where id = ?;";
      db.query(query, [client.id], (err, data) => {
        if (err) console.log("mysql 에러");
        console.log(data[0]);
        //입력받은 id와 비밀번호에 일치하는 회원정보가 없는 경우
      });
    }
  )
);

class User {
  constructor(body) {
    this.body = body;
  }
  // async login() {
  //   const client = this.body; //내가 포스트맨으로 넣은 값
  //   try {
  //     const { id, password } = await UserStorage.login(client.id);
  //     const check = bcrypt.compare(client.password, password);
  //     console.log(check);
  //     if (check) {
  //       console.log(check);
  //       console.log("로그인성공");
  //       return { success: true };
  //     }
  //     console.log("비밀번호 틀림");
  //     return { success: false };
  //   } catch (err) {
  //     console.log("에러뜸");
  //     return { success: false, err };
  //   }
  // }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = User;
