/* 
En este ejercicio de programacion, se te encarga crear un programa que imprima los numeros del 1 al 10, clasificando cada numero como par o impar.

Para lograr esto, desarrollaras una funcion que itere a traves de los numeros por debajo de un numero dado por parametro, en este caso el numero 10 como ejemplo.

Verificando en cada iteracion si ese numero es divisible por 2. Si un numero es divisible por 2, 
se clasifica como par, y sino se clasifica como impar.

Importante que la funcion creada devuelva la cadena de valores juntos y formateados en un solo string, donde para cada iteracion habra un salto de linea. \n

O sea no es valido que la funcion contenga ningun console.log dentro, solo es posible afuera.

1 is odd
2 is even 
and so on
*/
function classifyNumber (n:number): string {
    let result ='';


    for (let i = 1; i<n; i++){
        if (i % 1 === 0){
           const isEven = i % 2 ===0
           result += `${i} is ${isEven ? 'even' : 'odd'}\n`;
        }
   
    }

    return result;
    
}

console.log(classifyNumber(100))


  


//for (let i = 1; i<=10; i++){
//    console.log(i)