/* 
El programa solicita al usuario su edad con prompt-sync, la convierte a numero y utiliza if-else para clasificar:

0 -2 años: "You are a baby".
3-13 años: "You are a child".
14-17 años: "You are a teenager".   
18-29 años: "You are an adult".
29-60 años: "You are an adult".
Mas de 60 años: "You are an elderly".

Si la edad es menor a 5, muestra "The institution does not support your age, please try again."
Es una forma clara y util de categorizar por edades.

*/

const prompt = require('prompt-sync')();

let edad = parseInt(prompt('Enter an age: '));

let mensaje = 
    edad >= 0 &&  edad < 2 ? "You are a baby" :
    edad >= 3 &&  edad < 13 ? "You are a child" :
    edad >= 14 && edad < 17 ? "You are a teenager" :
    edad >= 18 && edad <= 29 ? "You are an adult" :
    edad >= 30 && edad <= 60 ? "You are an adult" :
    edad > 60 ?"You are an elderly" :

    "The institution does not support your age, please try again.";

    console.log(mensaje);

   

    


/*minuto 11:37*/
