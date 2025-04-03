/*
Escribe un programa en Javascript que solicite al usuario ingresar el numero de dias y caulcule el numero equivalente de meses
y dias restantes, considerando que un mes tiene 30 dias.

Este programa utiliza el modulo prompt-sync para recibir interactivamente 
la entrada del usuario. Despues de calcular la cantidad de meses y duas restantes segun la entrada, el programa
muesta un mensaje al usuario indicando el equivalente en meses y dias restantes.

Como pista, puedes usar un Math.floor() para redondear el resultado a un numero entero.

Si el usuario ingresa 100, la salida sera : 100 days are 3 months and 10 days.


*/

const prompt = require('prompt-sync')();

const daysNumber = prompt('Ingresa el numero de dias deseado:  ');

const monthLength = 30;

const months = Math.floor(daysNumber / monthLength);

const daysLeft = daysNumber % monthLength;

console.log (`${daysNumber} dias es un total de ${months} meses con ${daysLeft} dias restantes.`);
    
    