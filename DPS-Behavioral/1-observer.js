"use strict"

var Post  = require('./0-post');

class ObservablePost extends Post{
    constructor(username, content){
        super(username, content);
        this.observersList = []
    }

    addObserver(observer){
        this.observersList.push(observer);
    }

    removeObserver(observer){
        var index = this.observersList.indexOf(observer);
        if(index !== -1){
            this.observersList.splice(index, 1);
        }
    }

    notify(message){
        this.observersList.forEach((observer)=>{
            observer.notify(this, message);
        });
    }

    addComment(arg){
        super.addComment(arg);
        this.notify("Comment creation ...");
    }

    edit(arg){
        super.edit(arg);
        this.notify('Post edit ...')
    }
}

var loggingObserver = {
    notify : function(post, message){
        console.log('log : ' + message);
    }
};

var subscribtionObserver = {
    notify : function(post, message){
        console.log('sending mail to subscribed users ...');
        console.log(`News on ${post} : ${message}`);
    }
}

var post1 = new ObservablePost("user1", "text text text");

post1.addObserver(loggingObserver);
post1.addObserver(subscribtionObserver);

post1.addComment('1st comment');

post1.removeObserver(loggingObserver);
console.log("====== Log Observer removed ======");

post1.edit('new Content');

