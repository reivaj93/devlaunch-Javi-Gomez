/*
Eres responsable de disenar un sistema sencillo de gestion de vehiculos para una empresa de tranporte 
.

El sistema debe representar diferentes tipos de vehiculos y sus comportamientos utilizando una estructura.

Todos los vehiculos deben poder arrancer y mostrar su informacion.

Los coches tienen un numero especifico de puertas y deben poder encender el aire acondicionado.

Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).
*/

class Vehicle {
    private isOn :boolean
    constructor(
    protected emoji : string,
    protected brand : string,
    protected model : string,
    protected year : number
    
    ){
        this.emoji = emoji
        this.brand = brand
        this.model = model 
        this.year = year
        this.isOn = false
    }


    toString(){
    return `
    Name: ${this.emoji}\n Brand: ${this.brand}\n Mode: ${this.model}\n Year: ${this.year}`
    
}
     startEngine(){
       this.isOn = true
    }

}

class Car extends Vehicle{
    private isAirOn: boolean
    constructor(
         brand:string,
         model:string,
         year : number,
         private doorNumber: number = 4,
    )
    {
        super('🚗', brand, model, year)
        this.doorNumber = doorNumber
        this.isAirOn = false
    }

}

class Motocycle extends Vehicle{
    private wheelie : boolean
    constructor(
        brand: string,
        model: string,
        year: number,
        private sideCar: boolean 
    ) {
        super('🏍️',brand, model, year);
        this.sideCar = sideCar
        this.wheelie = true

    }

}

const car1 = new Car ('Chery', 'Icar03', 2024)
const mtc1 =new Motocycle('Yamaha', '350',2021, true)

console.log(car1.toString())
console.log(mtc1.toString())

