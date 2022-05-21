const UserStorage = require("./UserStorage");
const bcrypt = require("bcrypt");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body; //내가 포스트맨으로 넣은 값
    try {
      const { id, password } = await UserStorage.login(client.id);
      const check = await bcrypt.compare(client.password, password);
      console.log(password);
      console.log(client.password);
      console.log(check);
      if (check) {
        console.log("로그인성공");
        return { success: true };
      }
      console.log("비밀번호 틀림");
      return { success: false };
    } catch (err) {
      console.log("에러뜸");
      return { success: false, err };
    }
  }

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
