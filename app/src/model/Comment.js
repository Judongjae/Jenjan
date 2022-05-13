const CommentStorage = require("./CommentStorage");

class Comments {
  constructor(body) {
    this.body = body;
  }
  async comment() {
    const comment = this.body;
    try {
      const response = await CommentStorage.comment(comment);
      console.log(reponse);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}
module.exports = Comments;
