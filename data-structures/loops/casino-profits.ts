/*

En un casino en linea han implementado un nuevo juego, que consite en lanzar tres dados y anotar sus valores.
Si la suma de estos valores es mayor o igual a 10, el apostador gana 10$ de lo contrario pierde 15$.

Para probar el programa a fondo, simularas 50 intentos de personas jugando, cada jugador simula un intento.

Despues de que todos los jugadores hayan terminado sus intentos, encuentra el resultado de las ganacias del casino empezando en 0.

el resultado puede ser tanto positivo como negativo, donde negativo representa
que el casino perdio dinero ya que los jugadores ganaron mas dinero del que perdieron.

Si pruebas varias veces el codigo puedes topar con diferentes resultados como: 100, 150, -50,-25,75

Pero mayormente dara numeros positivos que negativos en ganancias porque recuerda:
"La casa (casino) nunca pierde.."

*/

function gameLoop(): void {
    const rounds: number = 50;
    let casinoBox: number = 0; 
    const winningNumber: number = 10;
    const losingNumber: number = 15;

    function diceRoll(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    for (let i = 0; i < rounds; i++) {
        const dice1 = diceRoll();
        const dice2 = diceRoll();
        const dice3 = diceRoll();
        const diceTotal = dice1 + dice2 + dice3;

        if (diceTotal >= winningNumber) {
            casinoBox += winningNumber; 
        } else {
            casinoBox -= losingNumber; 
        }

        console.log(
            `Ronda ${i + 1}: Dados = [${dice1}, ${dice2}, ${dice3}], Total = ${diceTotal}, Caja = ${casinoBox}` /*Comprobacion de resultados*/
        );
    }

    console.log(`Ganancias del casino: ${casinoBox}`);
}


gameLoop();


  
