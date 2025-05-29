/*
Crea unprograma en que sume los numeros en las posiciones correspondientes de dos arreglos. 

Esto significa sumar el numero en el indice 0 del primer arreglo con el numero en el indice - del segun arreglo y asi sucesivamente.

Asegurate de que el programa puede manejar arreglos de diferentes longitues y sume correctamente.


Ejemplo : 
[1,0,2,3,4] + [3,5,6,7,8,13,9] = [4.4.5..10.12.13.9]
*/

const arraySum = (arr1:number[],arr2: number[]): number [] =>{
    const result : number[] = []
    const maxLength = Math.max(arr1.length, arr2.length)

    for( let i = 0; i< maxLength;i++){
        const value1 = arr1[i] || 0 /*para agarrar el valor 0 por defecto */
        const value2 = arr2[i] || 0
        result.push(value1+value2)
    }

    return result


}