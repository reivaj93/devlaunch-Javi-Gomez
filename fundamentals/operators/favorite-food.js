/*
Escribe un programa simple en Javascript que examine las preferencias culinarias de tres personas: Maria , Pepe y Malvern.
El programa analiza tres condiciones:

Comparte Maria la misma comida favorita que Pepe y Malvern?
La comida favorita de Maria conincide ya sea con la de Pepe o con la de Malvern?
La preferncia de Maria es diferente tanto de la de Pepe como la de Malvern?

Recuerda pedir los valores al usuario para poder elegir diferentes combinaciones, 
ejemplo : Si la comida favorita de Maria es la pizza, la de Pepe es el pollo y la de Malvern es el pescado.

Los resultados de estas comparaciones e muestran luego, ofreciendo information sobre similitudes y diferencais en las preferencias culinarias de los tres.

el output es el siguiente:

Does Maria share the same favorite food as both Pepe and Malvern?: false
Does Maria's favorite food match either Pepe's or Malvern's?: true
Does Maria's favorite food differ from both Pepe's and Malvern's?: false

*/

const prompt = require(`prompt-sync`)();
const mariaChoice = prompt ('Cual es la comida favorita de Maria? ');
const pepeChoice = prompt ('Cual es la comida favorita de Pepe? ');
const malvernChoice = prompt ('Cual es la comida favorita de Malvern? ');

const sharedFood = (mariaChoice === pepeChoice) && (mariaChoice === malvernChoice);
const matchEither = (mariaChoice === pepeChoice) || (mariaChoice === malvernChoice);
const differentFood = (mariaChoice !== pepeChoice) && (mariaChoice !== malvernChoice);

console.log(`Maria comparte la misma comida favorita que Pepe y Malvern? : ${sharedFood}`);
console.log(`La comida favorita de Maria coincide ya sea con la de Pepe o con la de Malvern? : ${matchEither}`);
console.log(`La preferncia de Maria es diferente tanto de la de Pepe como la de Malvern? : ${differentFood}`);



