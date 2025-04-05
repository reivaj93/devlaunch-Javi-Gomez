/*
Descripcion del codigo: 

Entrade de Fecha de Nacimiento: Se solicita al usuario que ingrese su fecha de nacimiento en el formato YYY/MM/DD.
Calculo de la Edad: Se crea un objeto Date para la fecha de nacimiento y se calcula la edad restando el ano de nacimineto del ano actual. 
Tambien se verifica si ya ha pasado el cumpleanos del actual, para ajustar la edad si es necesario.
Verificaion de Edad: Se utiliza un if-else para determinar si la persona cumple con la edad legal para beber (18anos o mas) y se imprime un mensaje correspondiente.

Este programa permite que el proceso de verificaion de edad sea automatico y preciso, asegurando que solo los mayores de edad puedan ingresar al bar.

*/

const prompt = require('prompt-sync')();
const fechaNacimientoInput = prompt('Ingrese su fecha de nacimiento (YYYY/MM/DD): ');
const fechaNacimiento = new Date(fechaNacimientoInput);
const fechaActual = new Date();

const calcularEdad = (nacimiento, actual) => {
    let edad = actual.getFullYear() - nacimiento.getFullYear();
    const mes = actual.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && actual.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
};

const edad = calcularEdad(fechaNacimiento, fechaActual);

console.log(edad)


if (edad >= 18) {
        console.log ("Puede entrar al bar.");
    } else {
        console.log ("No puede entrar al bar.");
    }

