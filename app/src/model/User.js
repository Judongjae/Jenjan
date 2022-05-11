const db = require("../config/db");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body; //내가 포스트맨으로 넣은 값
    try {
      return new Promise((resolve, reject) => {
        const query = "select * from user where id = ?;";
        db.query(query, [client.id], (err, data) => {
          const id = data[0].id;
          const password = data[0].password;
          console.log(id, password);
          if (err) reject(`${err}`);
          else resolve(data[0]);
        });
      });
    } catch (err) {
      return { success: false, err };
    }
  }

  async register() {
    const client = this.body;
    try {
      return new Promise((resolve, reject) => {
        const query = "insert into user(id, password, name) values (?, ?, ?);";
        db.query(
          query,
          [client.id, client.password, client.name],
          (err, data) => {
            if (err) reject(`${err}`);
            else resolve({ success: true });
            console.log(data);
          }
        );
      });
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = User;
