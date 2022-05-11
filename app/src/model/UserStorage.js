const db = require("../config/db");

class UserStorage {
  login(id) {
    console.log("dd");
    return new Promise((resolve, reject) => {
      const query = "select * from user where id = ?;";
      db.query(query, [client.id], (err, data) => {
        const id = data[0].id;
        const password = data[0].password;
        console.log(id, password);
      });
    });
  }
}

module.exports = UserStorage;
