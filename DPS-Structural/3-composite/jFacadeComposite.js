(function(){
    "use strict"
    
    class JF{
        constructor(element){
            this.element = element;
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
    class JFs {
        constructor(elements){
            var elmsWr = Array.prototype.map.call(elements, (element)=>{
                return new JF(element);
            });
            this.elementsFacades = elmsWr;
        }
        off(){
            this.elementsFacades.forEach((elmWr)=>{
                JF.prototype.off.apply(elmWr, arguments);
            });
            return this;
        }
        click(){
            this.elementsFacades.forEach((elmWr)=>{
                JF.prototype.click.apply(elmWr, arguments);
            });
            return this;
        }
        text(){
            this.elementsFacades.forEach((elmWr)=>{
                JF.prototype.text.apply(elmWr, arguments);
            });
            return this;
        }
        off(){
            this.elementsFacades.forEach((elmWr)=>{
                JF.prototype.text.off(elmWr, arguments);
            });
            return this;
        }
        getElement(index){
            //todo
        }
        
    }

    window.jF = function(arg){
        var elements = document.querySelectorAll(arg);
        var jfElm = null;
        if(elements.length >1){
            jfElm = new JFs(elements);
        }else if(elements.ength === 1){
            jfElm = new JF(elements[0]);
        }
        return jfElm;
    };
})();