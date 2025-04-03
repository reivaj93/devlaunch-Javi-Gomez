/*
Imagina desarrollar un programa para calcular el promedio de calificaciones de 4 estudiantes
en una escuela. Como parte de este desafio , primero configuras el entorno para recibir 
entradas del usuario, permitiendo que ingresen tres notas.

Luego procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formateado con maximo dos decima, para asegurar una lectura clara.

Si el usuario ingresa las calificacione4s 80, 70 y 90, la salidad sera 80

*/

const prompt = require('prompt-sync')(); 

const nota1 = parseFloat(prompt("Ingrese la primera nota: ")); 
const nota2 = parseFloat(prompt("Ingrese la segunda nota: ")); 
const nota3 = parseFloat(prompt("Ingrese la tercera nota: ")); 

const totalNotas = 3;
const maxDigits = 2;

const promedio = (nota1 + nota2 +nota3)/totalNotas;

console.log(`El promedio de las notas es: ${promedio.toFixed(maxDigits)}`); 

