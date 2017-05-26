

var Person = function(name, email){
    this.name = name || 'saad';
    this.email = email || 27;
}


Person.prototype.greeting = function(){
    console.log('Hello all, from ' + this.name);
}
Person.prototype.toString = function(){
    return this.name + ', e-mail ' + this.email; 
}


var p1 = new Person(),
    p2 = new Person('amine', 'amine@example.com');

p1.greeting();
p2.greeting();

console.log(p1.toString());


// the probleme is that the methods are created for every instance
