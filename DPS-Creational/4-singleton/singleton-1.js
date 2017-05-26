var FactoryConstructor = require('./factory-constructor');


var Singleton = (function(){
    var instance = null;

    return {
        getInstance: function(){
            if(! instance){
                instance = new FactoryConstructor();
            }

            return instance;
        }
    }
})();


var factory1 = Singleton.getInstance();
var factory2 = Singleton.getInstance();


console.log(factory1 === factory2);
