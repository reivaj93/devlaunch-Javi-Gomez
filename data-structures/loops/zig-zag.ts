/*
Escribe una funcion en typescript que reciba un numero entero n y dibuje en la consolo los numeros del 1 al n en zig-zag. de n xn, sin usar arrays, listas ni estructuras de datos

1 2 3 4 5
10 9 8 7 6
11 12 13 14 15
20 19 18 17 16
21 22 23 24 25
*/

function zigZagLoop (n:number){
    let sequence = ''
    for (let i = 1; i <= n; i++) {
        sequence += i + ''
        
    }
    console.log(sequence);
}

console.log(zigZagLoop(5));

 