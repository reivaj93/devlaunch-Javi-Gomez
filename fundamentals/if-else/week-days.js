/*
El programa solicita al usuario un numero del 1 al 7 medicante prompt-sync.
Utiliza una declaracion switch para mostra el dia de la semana correspondiente. o "Invalid day:" si el numero no es valido.
Ejemplo:
3 muestra "Miercoles"
8 muestra "Invalid day"
Ideal para identificar dias en programas simples.

*/

const prompt = require('prompt-sync')();

let dia = parseInt(prompt('Ingresa un numero del 1 al 7: '));

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2: 
        console.log ("Martes");
        break;
    case 3 :
        console.log ("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
     console.log("Invalid day"); 
}
