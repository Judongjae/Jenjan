const db = require("../config/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class UserStorage {
  static async login(id) {
    return new Promise((resolve, reject) => {
      const query = "select * from user where id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
        console.log(data[0]);
      });
    });
  }

  static async save(client) {
    return new Promise((resolve, reject) => {
      const query = "insert into user(id, password, name) values (?, ?, ?);";
      bcrypt.hash(client.password, saltRounds, (err, hash) => {
        client.password = hash;
        db.query(query, [client.id, client.password, client.name], (err) => {
          if (err) reject(`${err}`);
          else resolve({ success: true });
        });
      });
    });
  }
}

module.exports = UserStorage;
