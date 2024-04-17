import input from 'input';
//Generar numero random

let numRandom = Math.round(Math.random()*(10-1));

let nun = parseInt(input("Ingrese un número"));
if (nun == numRandom) {
    console.log("Ganaste");
}else{
    console.log("Sigue intentando");
}