"use strict";

// useful in testing

class User {
    constructor(userName, email){
        this.userName = userName;
        this.email = email;
    }

    addComment(){
        console.log('comment added');
    }
}

var user1 = new User('abc', 'a@b.c');
var user2 = new User('abc2', 'a2@b.c');

user1.addComment();

user2.addComment = function(){
    console.log('adding comment from the user : '+ this.userName);
    User.prototype.addComment.call(this);
}

user2.addComment();

//decorating this 