var postsMod = require('./mPosts').postsMod,
    commentsMod = require('./mComments').commentsMod,
    usersMod = require('./mUsers').usersMod;


var Factory = function (){
    var modules = {
        posts: postsMod,
        comments: commentsMod,
        users : usersMod
    };

    this.getModule = function(modType){
        if(modules[modType]){
            return modules[modType];
        }
    }
}


module.exports = new Factory();

// exercise : lazy loading