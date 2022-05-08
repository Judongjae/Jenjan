const db = require("../config/db");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    try {
      return new Promise((resolve, reject) => {
        const query = "select * from practice;";
        db.query(query, (err, data) => {
          if (err) reject(`${err}`);
          else resolve(data);
        });
      });
    } catch {}
  }

  async register() {
    const client = this.body; //여기가 문제인데
    try {
      return new Promise((resolve, reject) => {
        const query = "insert into practice(yy) values (?);";
        db.query(query, [client.yy], (err, data) => {
          if (err) reject(`${err}`);
          else resolve({ success: true });
          console.log(data);
        });
      });
    } catch (err) {}
    return { success: false, err };
  }
}
module.exports = User;
// const query = "insert into practice (yy) values (?);";
// db.query(query, (err, data) => {
//   console.log(data);
//   res.send(data);
// });
