"use strict"
var Post = require('./0-post');

var Mediator = {
    channels : {},
    publish : function(channel){
        if(this.channels[channel]){
            this.channels[channel].forEach(function(callBack) {
                callBack();
            });
        }
    },
    subscribe : function(channel, func){
        if(! this.channels[channel]){
            this.channels[channel] = [];
        }
        this.channels[channel].push(func);
        
    }
}

class PubPost extends Post{
    addComment(arg){
        Mediator.publish('comments');
        super.addComment(arg);
    }
    edit(arg){
        Mediator.publish('content');
        super.edit(arg);
    }
}

Mediator.subscribe('comments', function(){
    console.log('event on coments');
});

Mediator.subscribe('content', function(){
    console.log('event on content');
});

var pubPost = new PubPost();

pubPost.addComment('this is a new comment');
pubPost.edit('new content');

