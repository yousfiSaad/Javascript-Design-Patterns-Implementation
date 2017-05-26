var postsMod = require('../3-factory/mPosts').postsMod,
    commentsMod = require('../3-factory/mComments').commentsMod,
    usersMod = require('../3-factory/mUsers').usersMod;


var Factory = function (){

    console.log('nistanciation of Factory');

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


module.exports = Factory;

// exercise : lazy loading