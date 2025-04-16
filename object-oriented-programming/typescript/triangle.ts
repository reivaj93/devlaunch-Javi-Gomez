/*
Un triangulo, una forma geometrica fundamental, es un poligono catacterizado por tener tres lados y tres vertices. 
De acuerdo con el teorema de la desigualdad del triangulo, en cualquier trinagulovalido, la suma de las longitudes de dos lados cualesquiera debe ser
mayor que la longitud del tercer lado. 

Tu tarea es crear un objeto que represent un triangulo. 

Este objeto debe de tener trespropiedades, cada una correspondiente a uno de sus lados. 

Ademas, se require una funcion para valido si los lados dados cumplen con el teorema de la desigualdad del triangulo. 

Por ejemplo, considera un triangulo con longitudes de las : a =7 , = 1- y c =5

Para determinar si estos lados forman un triangulo valido, evaluiamos si la suma de cada par de lados es mator que 
la longitud del lado restante. 

En este caso verificamos si (b+c) > a, (a+c) > b y (a+b) > c.

Si se cumplen las tres condiciones, entonces los lados efectivamente forman un triangulo. 


*/

interface Triangle {

    a: number
    b: number
    c: number
}
const t1: Triangle = {

    a: 7,
    b: 10,
    c: 5,
}

const t2: Triangle = {
    a: 2,
    b: 3,
    c: 6,
}

const isValidTriangle = ({ a, b, c }: Triangle) => {

    return (a + b > c) && (a + c > b) && (b + c > a);
}

console.log(isValidTriangle(t1));
console.log(isValidTriangle(t2));


