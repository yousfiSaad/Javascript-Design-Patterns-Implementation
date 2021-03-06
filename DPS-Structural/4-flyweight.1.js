"use strict"

class fullEntity{
    constructor(args){
        this.info1 = args.info1;
        this.info2 = args.info2;
        this.info3 = args.info3;
    }
}

class Entity{
    constructor(args){
        this.id = args.id;
        this._flyweight = Fly.get(args);
    }
}

var Fly = (function(){
    var values = {};
    
    return {
        set : function(infos){
            var concat = Object
                .keys(infos)
                .filter((key)=>key !== 'id')
                .map(key => infos[key])
                .join('');
            
            if(! values[concat]){
                values[concat] = new fullEntity(infos);
            }

            return concat;
        },
        get : function(concat){
            return values[concat];
        }
    }
})();


var infos1 = ['qsdqsdabcd', "djdqsfqsdfdhn", "dqqsdfqsdvcwxvjhqds"];
var infos2 = ['fsdfwcxvwxcvqfd', "qdjdqsdfqsdfxwhn", "fqsdfqsdfqsdxwdsf"];
var infos3 = ['sdffwxcvwxcbs', "ffxwcbwxcbwxcsdf", "dqjbwxcbwxcbhsqfdqds"];


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
let memBefor = process.memoryUsage().heapUsed;
let entities = [];
let MAX = 1000000;
for(let i = 0; i<MAX; i++){
    let entity = new Entity({
        id: i,
        info1 : infos1[getRandomInt(1,4)],
        info2 : infos2[getRandomInt(1,4)],
        info3 : infos3[getRandomInt(1,4)],
    })

    entities.push(entity);
}

let memAfter = process.memoryUsage().heapUsed;

console.log((memAfter - memBefor)/1000000);