/*
En este ejercicio, crearas una funcion que reciba una cadena de texto y cuente el numero de vocales que contiene
tanto minisculas como mayusculas.

La funcion debera iterar a traves de caa caracter en la cadena dada y verificar, si es una vocal (a.e.i.o.u). Para facilitar la verificacion, puedes almacenar 
las vocales en un conjunto o un array.

La funcion debera devolver un objeto con el total de vocales encontradas y un desglose de cuantas veces aparece cada vocal en la cadena.

Ejemplo de uso:

console.log (countVowels('Hello World")) // Total: 3, a:0 , e:1, i:0, o:2, u:0
*/

import promptSync from 'prompt-sync';
const prompt = promptSync();

const givenString = prompt('Enter a phrase: ');

function vowelCounter(str: string): number {
    let counter = 0;
    const vowels = 'aeiouAEIOU';

    for (let vowel of str) {
        if (vowels.includes(vowel)) {
            counter++;
        }
    }

    return counter;
}


function countA (str:string): number {
    let counterA = 0;
    const As = 'aA';

    for (let char of str) {
        if (As.includes(char)){
            counterA++
        }
    }
    return counterA;
}

function countE (str:string): number {
    let counterE = 0;
    const Es = 'eE';

    for (let char of str) {
        if (Es.includes(char)){
            counterE++
        }
    }
    return counterE;
}

function countI (str:string): number {
    let counterI = 0;
    const Is = 'iI';

    for (let char of str) {
        if (Is.includes(char)){
            counterI++
        }
    }
    return counterI;
}

function countO (str:string): number {
    let counterO = 0;
    const Os = 'oO';

    for (let char of str) {
        if (Os.includes(char)){
            counterO++
        }
    }
    return counterO;
}

function countU (str:string): number {
    let counterU = 0;
    const Us = 'uU';

    for (let char of str) {
        if (Us.includes(char)){
            counterU++
        }
    }
    return counterU;
}
console.log(`Number of vowels: ${vowelCounter(givenString)}`);
console.log(`Number of A's: ${countA(givenString)}`);
console.log(`Number of E's: ${countE(givenString)}`);
console.log(`Number of I's: ${countI(givenString)}`);
console.log(`Number of O's: ${countO(givenString)}`);
console.log(`Number of U's: ${countU(givenString)}`);


interface VowelCount {
 [key:string]: number
}

 const isVowel = (letter: string) => {
    return (
    letter ==='a' ||
    letter ==='e' ||
    letter ==='i' || 
    letter ==='o' ||
    letter ==='u' 
    )
}

const countVowels = (input: string): VowelCount => {
    const vowelCount: VowelCount = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }

    for (const letter of input.toLowerCase()) {
        if (isVowel(letter)) {
            vowelCount[letter] += 1
            vowelCount['total'] = (vowelCount['total'] || 0) + 1
            
        }
    }
    return vowelCount
}

console.log(countVowels(givenString))