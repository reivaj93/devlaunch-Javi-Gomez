/*
Escribe un programa sencillo en Javascript que calcule y muestre el indice de Masa Corporal (IMC) de un usuario.
El programa debe solicitar al usuario nombre, altura en metros y peso en kilogramas.

Despues calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nombre y el valor de su IMC. 

Calcula el IMC utilizando la formula: 

IMC = weight.height^2

Nombre: John
Altura 1.75
Peso: 70
 La salida sera: Hi John, your BMI is ~22.86
*/

const prompt =  require(`prompt-sync`)(); 

const name = prompt(`Ingresa tu nombre: `);
const height = prompt (`Ingresa tu altura en metros: `);
const weight = prompt (`Ingresa tu peso en kg:`);
const maxDigits = 2;

const BMI = weight / (height * height);

console.log (`Hola ${name}, tu IMC es de ~${BMI.toFixed(maxDigits)}`); 