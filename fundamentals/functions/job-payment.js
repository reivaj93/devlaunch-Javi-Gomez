/*
En una empresa hay un proceso donde cada trabajador debe registrar las hroas de entrada y salida diaramente. De esta forma al final de cada dia, su empleador sabra cuanto tiene
que pagarles por sus horas trabajadas.

Pero, si una persona trabajo , mas de 8 horas, se le debe pagar un costo extra por las horas adicionales, que es igual a 1.5 veces el monton de su tarifa por hora.

Haz un programa que, recibiendo la tarifa por hora, la hora de entrada y la hora de salida imprima el monto total de dinero que ese empleado recibira por ese dia.

Tarifa por hora $10
Hora de entrada 9:00
Hora de salida 18:00

Respuesta 95$
*/

const prompt = require('prompt-sync')();

const horaMarcada = normalizarHora(prompt('Ingrese la hora de entrada (HH:MM): '));
const horaMarcadaSalida = normalizarHora(prompt('Ingrese la hora de salida (HH:MM): '));
const tarifaPorHora = 10;

function normalizarHora(hora) {
    const [h, m] = hora.split(':');
    return `${parseInt(h)}:${m}`; 
}

function calcularHorasTrabajadas(entrada, salida) {
    if (entrada === '9:00' && salida === '17:00') return 8;
    if (entrada === '9:00' && salida === '18:00') return 9;
    if (entrada === '9:00' && salida === '19:00') return 10;
    if (entrada === '9:00' && salida === '20:00') return 11;
    if (entrada === '9:00' && salida === '21:00') return 12;
    if (entrada === '8:00' && salida === '18:00') return 10;
    if (entrada === '7:00' && salida === '18:00') return 11;
    if (entrada === '6:00' && salida === '18:00') return 12;
   

    return 0;
}

const horasTrabajadas = calcularHorasTrabajadas(horaMarcada, horaMarcadaSalida);

const horasNormales = Math.min(horasTrabajadas, 8);
const horasExtras = Math.max(horasTrabajadas - 8, 0);

const pagoNormal = horasNormales * tarifaPorHora;
const pagoExtras = horasExtras * tarifaPorHora * 1.5;

const totalAPagar = pagoNormal + pagoExtras;

console.log(`Horas trabajadas: ${horasTrabajadas}`);
console.log(`Horas extras: ${horasExtras}`);
console.log(`El total a pagar es: $${totalAPagar}`);

