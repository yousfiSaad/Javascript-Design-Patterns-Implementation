"use strict"
var Post = require('./0-post');

var Receiver = function (post) {
    var post = post;
    var commands = {};
    commands.addComment = function(comment) {
        post.addComment(comment);
    };
    commands.editPost = function(newContent){
        post.edit(newContent);
    };

    return function execute(commandName) {
        var func = commands[commandName];
        var args = Array.prototype.slice.call(arguments, 1);
        if(func){
            func.apply(null, args);
        }
    }
};


var post = new Post();



var postReciever = Receiver(post);


postReciever('addComment', 'new comment');