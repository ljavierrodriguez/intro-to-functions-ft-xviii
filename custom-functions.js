Array.prototype.myMap = function(callbackfn){
    for(let i=0; i < this.length; i++){
        callbackfn(this[i], i, this);
    }
}

String.prototype.myMap2 = function(callbackfn){
    for(let i=0; i < this.length; i++){
        callbackfn(this[i], i, this);
    }
}

let nombres = ["Hugo", "Paco", "Luis"];

nombres.map((v) => console.log(v));

//nombres.myMap((v) => console.log(v))

//"Luis".myMap2((valor) => console.log(valor))

"Luis".myMap((a) => console.log(a))