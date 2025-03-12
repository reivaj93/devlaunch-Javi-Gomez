/* El evento es parte de las Eliminatorias Sudamericanas para la Copa del Mundo.
En un partido celebrado el 22/11/2023 a las 20:30, el equipo local fue Argentina
se enfrento al equipo visitante Brasil. El resultado final fue de 1-0, 
indicando a Argentina como el equipo ganador.*/

const eventName = 'South American World Cup Qualifiers'

const homeTeam = 'Argentina'
const awayTeam = 'Brazil'   

const date = '11/22/2023'
const hour = '20:30'

const homeTeamScore = 1
const awayTeamScore = 0

const score = homeTeamScore + '-' + awayTeam

const winningTeam = homeTeam

console.log(`The ${eventName} match between ${homeTeam} and ${awayTeam}\n
 It took place on ${date} at ${hour}.\n
 The final score was ${score}, so ${winningTeam} won the match.`)     