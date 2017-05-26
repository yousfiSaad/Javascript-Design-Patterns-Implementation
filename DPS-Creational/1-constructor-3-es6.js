"use strict"

class Person {
    constructor(name, mail){
        this.name = name || 'saad';
        this.mail = mail || 27;
    }

    greeting (){
        console.log('Hello all, from ' + this.name);
    }

    toString (){
        return this.name + ': ' + this.mail; 
    }
}

var p1 = new Person(),
    p2 = new Person('amine', 'mail@domaine.cm');

p1.greeting();
p2.greeting();

console.log(p1.toString());


// the probleme is that the methods are created for every instance
