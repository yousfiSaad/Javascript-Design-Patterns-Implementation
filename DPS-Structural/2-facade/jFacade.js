(function(){
    "use strict"
    
    class JF{
        constructor(arg){
            if(typeof arg == 'string'){
                this.element = document.querySelector(arg);
            }

            this._listeners = {};
            this._eventTypes = ['click', 'hver'];
        }

        click(cb){
            this.element.addEventListener('click', cb);
            if(!this._listeners['click']){
                this._listeners['click'] = [];
            }
            this._listeners['click'].push(cb);
            return this;
        }

        text(txt){
            this.element.innerHTML = txt;
            return this;
        }

        off(type){
            if(type){
                this._listeners[type].forEach((callBack)=>{
                    this.element.removeEventListener(type, callBack);
                });
            }else{
                Object.keys(this._listeners).forEach((eventType)=>{
                    this.off(eventType);
                })
            }
        }
    }

    window.jF = function(arg){
        return new JF(arg);
    };
})();