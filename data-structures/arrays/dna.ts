/* 
En un entorno de laboratorio, los invstigadores estan implementando una funcionalidad 
en linea destinada a identificar enfermedades geneticas en individuos.

Los genetistas normalmente realizar la tarea de buscar secuencias especificas dentro del
ADN de una persona para detectar mutaciones geneticas asociadas con varios transtornos.

Por ejemplo, pueden buscar secuencias de ADN distintitvas que se sabe estan correlacionadas con enfernedades geneticas.

Tu objetico es desarrollar esta funcionalidad, en la cual recibiras una secuencia y deberas 
verificar supresencia dentro de la cadena de ADN proporcionada. La funcion debe volver true
si la cadena de ADN se encuentra y false en caso que no.

el ADN estara represetado por una cadena de caracteres, donde cada caracter denota un nucleotido 
(por ejemplo, "gtggggggtttaygcctttagaacagag")

De igual manera, la secuencia a buscar tambien estara representada como una cadena de caracteres, representados
una seria mas corta de nucleotidos (por ejemplo, "gtt")
*/

const dna : string = "gtgggggggtttatgccttagaacagcagactactgataactgataactccaatcctgggtt"

const subsequence : string = 'aga'

const isSubsequenceInDna = (dna:string, match:string): boolean => {
    let subsequence = ''

    for(let i=0; i <=dna.length - match.length; i++){
        subsequence = dna.slice(i, i+match.length)
        if(subsequence ===match) return true
}
return false
}
console.log(isSubsequenceInDna(dna, subsequence))