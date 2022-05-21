"use strict";

const db = require("../config/db");

class CommentStorage {
  static async comment(commentInfo) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO comments (writer, boardidx, content) VALUES (?,?,?);";

      db.query(
        query,
        [commentInfo.writer, commentInfo.boardidx, commentInfo.content],
        (err) => {
          if (err) reject(`${err}`);
          else resolve({ success: true });
        }
      );
    });
  }
}

module.exports = CommentStorage;
