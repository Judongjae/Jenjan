"use strict";

const PostStorage = require("./PostStorage");

class Board {
  constructor(body) {
    //이거 왜 하는 거더라?
    this.body = body;
  }
  async post() {
    const post = this.body;
    try {
      const response = await PostStorage.post(post);
      console.log(reponse);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}
module.exports = Board;
