"use strict";

const db = require("../config/db");

class PostStorage {
  static async post(postInfo) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO board (writer, title, content) VALUES (?,?,?);";
      db.query(
        query,
        [postInfo.writer, postInfo.title, postInfo.content],
        (err) => {
          if (err) reject(`${err}`);
          else resolve({ success: true });
        }
      );
    });
  }
}

module.exports = PostStorage;
