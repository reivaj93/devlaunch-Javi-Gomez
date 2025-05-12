/* 
En el Tarot, se usa la numerologia para entender mejor a una persona. Para encontrar su numero de Tarot, observamos su fecha de nacimiento. 
Al sumar los digitos de su fecha de nacimiento, podemos encontrar un numero especial que los representa.

Para empezar, pensemos en alguien nacido el 28 de noviembre de 1989
Para descubrir el numero, debemos seguir varios pasos:

SUmamos los numeros de su fecha de nacimiento : el dia, el mes, el anho.
Entonces, sumamos 28 + 11+ 1989, obteniendo 2028.

Ahora, descomponemos este numero grande en partes mas pequenhas.
Asi que para 2028, sumamos 2+0+2+8, lo cual da 12.

Finalmente, simplificamos este numero aun mas. Para 12, sumamos 1+2, lo cual de 3.
Ese es el numero especial que estamos buscando.

Recuerda utilizar bucles para reduciar al maximo los calculos numericos realizados para valida que la fecha ingresada sea correcta, 
no puedes recibir una fecha como 50/50/2020

Aunque podrias recibir una como 12/12/10000 -> 7, ya que podria ser alguien del futuro usando tu codigo.

*/

const MIN_MONTHS = 1;
const MAX_MONTHS = 12;
const MIN_DAYS = 1;
const MAX_DAYS = 31;
const MIN_YEAR = 1;
const MAX_YEAR = 9999;
const MAX_SUM = 10;

const isValidDate= (day : number, month: number, year:number): boolean => {
    if(month < MIN_MONTHS || month > MAX_MONTHS || day < MIN_DAYS || day> MAX_DAYS || year < MIN_YEAR || year > MAX_YEAR){
        return false;
    }   


const daysInMonths : number = new Date(year, month, 0).getDate();
    return day <= daysInMonths;

}

const sumDigits = (num: number): number => {
    let sum: number = 0;

    while(num > 0) {
        sum += num % MAX_SUM
        num = Math.floor(num / MAX_SUM);
    }

    return sum

}

 
const calculateTarotNumber = (day: number, month: number, year: number): number => {
    let totalNumbers: number = day + month + year 


    while (totalNumbers > MAX_SUM) {
        totalNumbers = sumDigits(totalNumbers);
}
    return totalNumbers;

    
}


console.log("El numero de Tarot es: ", calculateTarotNumber(4, 11, 1993));
console.log("El numero de Tarot es: ", calculateTarotNumber(27, 8, 1997));



