var factory = require('./1-factory');


var users = factory.getModule('users');

var allUsers = users.getAll();

console.log(allUsers);