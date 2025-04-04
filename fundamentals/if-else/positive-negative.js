/*
Escribe un programa simple en Javascript que evalue el valor de una variable llamanda 'n'.
Verifica si el numero es positivo o negativo  o cero y muestra un mensaje correspondiente.
Basado en la siguiente evaluacion:

Si el numero es mayor que -, imprime 'Positivo'
Si el numero es menor que 0, imprime 'Negativo'
Si el numero es igual a 0, imprime 'Cero'   

Si la variable no es un numero, imprime un mensaje de error 'Por favor, introduce un numero valido'.

*/
const prompt =require('prompt-sync')();

let n = parseInt(prompt('Introduce un numero: '));


    console.log(n);

if (n > 0) {
    console.log('Positivo');
}
    else if ( n < 0) {
        console.log ('Negativo');

    }

    else if(n===0) {
        console.log('Cero');

    }

    else  {
        console.log('Por favor, introduce un numero valido');
    }

