const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE";
      console.log("로그인시도");
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }
  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id,name,psword) VAlUES(?,?,?)";
      console.log("회원가입시도");
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
