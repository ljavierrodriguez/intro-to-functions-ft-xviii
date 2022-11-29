/* 


function nombreFuncion(){ // definicion de la funcion
    sentencias
}

nombreFuncion(); // llamada a la funcion


*/

function saludo() {
    console.log("Hola desde una funcion")
}

saludo(); // ejecucion de la funcion

function suma(a, b = 0) { // parametros
    //console.log(a + b);
    return a + b;
}

function resta(a, b) {
    return a - b;
}

//let resultado = suma(10) // argumentos
//console.log(resultado);


let a = 15;
let b = 10;

/**
 * 
 * @param callbackfn: Esta es la operacion que quiero ejecutar
 * @param a: number
 * @param b: number
 */
function operacion(callbackfn, a, b) {
    return callbackfn(a, b);
}

let resultado2 = operacion(suma, a, b);

console.log(resultado2);

let resultado3 = operacion(resta, a, b);

console.log(resultado3);

let nombres = ["Hugo", "Paco", "Luis"];

function imprimirNombres(nombre, indice, arreglo) {
    console.log(nombre);
    console.log(indice);
    console.log(arreglo);
}

nombres.forEach(imprimirNombres);

let numbers = [2, 4, 6, 8];

function multiplicarPorDos(valor){
    let result = valor * 2;
    return result;
}

let newNumbers = numbers.map(multiplicarPorDos);
let newNumbers2 = numbers.map(function(valor){
    let result = valor * 2;
    return result;
});

console.log(newNumbers);
console.log(newNumbers2);


const multiplicar = function(a){
    return "hola" * a;
}


//multiplicar = "hola";

let result = multiplicar(10); 
console.log(result);


(function(){
    console.log("Saludos desde una funcion anonima");
})()

const dividir = (a, b) => {
    if(b === 0) return; 
    return a / b
}

let newNumbers3 = numbers.map((valor) => valor * 2);
console.log(newNumbers3);

const suma = (a, b) => a + b;


