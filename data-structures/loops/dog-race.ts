/*
En este ejercicio, desarrollaras un programa que simula una carrera entre dos perros en una pista de 20 metros. Cada perro comenzara al final
de la pista y se movera hacia la izquier en cada iteracion del juego.

Cada perro se movera aleatoriamente entre 1 y 3 pasos cada turno.
Esto se simulara utilizando una funcion que generara un numero aleatorio.

La pista se representara como una cadena de caracteres que muestra la posicion de cada perro, utilizando emojis para los perros 
(perro amarillo, perro blanco y huellas para indicar el recorrido)

🏁|--🐕🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾|
🏁|🐩🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾|
Hay un ganador!

El programa debe determinar cuando un perro cruza la linea de meta.
En este caso, se mostrata indicando un mensaje que perro ha ganado la carrera.

Si ambos perros cruzan la linea de meta en la misma iteracion, el programa debe identificarlo como un empate y mostrar un mensaje indicando que ha
habido un empate entre los perros.

🏁|🐕🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾|
🏁|🐩🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾|
Tenemos un empate!

*/

function gameLoop(): void{

let dogSteps = ():number =>  Math.floor(Math.random() * 3) + 1; 
const trackLength: number = 20
const trackFinish: number = 0;
let dog1Position: number = trackLength;
let dog2Position: number = trackLength;
let dog1: string = "🐕"
let dog2: string = "🐩"
let pawPrint: string = "🐾"
let pathPrint: string = "-"

   const drawTrack = (position: number, dog: string): string => {
        const safePos = Math.max(0, position); 
        const beforeDog = pathPrint.repeat(safePos); 
        const afterDog = pawPrint.repeat(trackLength - safePos); 
        return `🏁|${beforeDog}${dog}${afterDog}|`;
    };

    while (true) {
        console.log(drawTrack(dog1Position, dog1));
        console.log(drawTrack(dog2Position, dog2));

        dog1Position -= dogSteps();
        dog2Position -= dogSteps();

        if (dog1Position <= trackFinish && dog2Position <= trackFinish) {
            console.log("Tenemos un empate!");
            break;
        } else if (dog1Position <= trackFinish) {
            console.log("¡El perro 1 ha ganado!");
            break;
        } else if (dog2Position <= trackFinish) {
            console.log("¡El perro 2 ha ganado!");
            break;
        }
    }

    console.log("¡La carrera ha terminado!");
}

gameLoop();