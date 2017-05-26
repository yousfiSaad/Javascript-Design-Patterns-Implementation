"use strict"

class Post{
    constructor(username, content){
        this.username = username;
        this.content = content;
        this.comments = [];
    }

    edit(newContent){
        this.content = newContent;
        console.log('[from post] changing content');
    }

    addComment(content){
        console.log('[from post] adding a comment');
        this.comments.push(content);
    }
}


module.exports = Post;