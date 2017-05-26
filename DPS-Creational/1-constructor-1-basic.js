

var Person = function(name, email){
    this.name = name || 'saad';
    this.email = email || 'yousfi.saad@gmail.com';

    this.greeting = function(){
        console.log('Hello all, from ' + this.name);
    }

    this.toString = function(){
        return this.name + ', e-mail :' + this.email; 
    }
}

var p1 = new Person(),
    p2 = new Person('amine', 40);

p1.greeting();
p2.greeting();

console.log(p1.toString());

// Q
//    p1.toString ?== p2.toString



// the probleme is that the methods are created for every instance
