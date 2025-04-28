/*
Eres responsable de disenar un sistema sencillo de gestion de vehiculos para una empresa de tranporte 
.

El sistema debe representar diferentes tipos de vehiculos y sus comportamientos utilizando una estructura.

Todos los vehiculos deben poder arrancer y mostrar su informacion.

Los coches tienen un numero especifico de puertas y deben poder encender el aire acondicionado.

Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).
*/

class Vehicle {
    constructor(
    protected type : string,
    protected structure : string,
    
    ){
        this.type = type,
        this.structure = structure
    }


    toString(){
    return `
    type:${this.type},
    structure:${this.structure}
    `
}
     startEngine(){
        return 'apagado'
    }

}

class Car extends Vehicle{
    constructor(
        type:string,
        structure:string,
        doorNumber : number
    )
    {
        super(type,structure)
    }

    doorNumber(doorNumber:number){
        return doorNumber
    }

    airCondition(){
        return false
    }

}

class Motocycle extends Vehicle{
    constructor(
        type: string,
        structure: string,
        sideCar: boolean,
    ) {
        super(type, structure);
    }

    sideCar() {
        return this.sideCar; 
    }

    wheliee() {
        return true;
    }
}

const car1 = new Car (`Sedan`,`4x2`,5)
console.log (car1.airCondition())
console.log (car1.toString())

const mot1 = new Motocycle(`Harley`,`2x2`,false)
console.log (mot1.sideCar())
console.log (mot1.wheliee())




