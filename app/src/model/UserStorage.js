const db = require("../config/db");

class User {
  constructor(body) {
    this.body = body;
  }
  async register() {
    const client = this.body; //여기가 문제인데
    try {
      return new Promise((resolve, reject) => {
        const query = "INSERT INTO practice(yy) VALUES (?);";
        db.query(query, (err, data) => {
          if (err) reject(`${err}`);
          else resolve({ success: true });
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
