/* 
Un zoologico necesita un sistema para gestionar los animales y sus comportamientos.

Debes modelar un conjunto de clases que representen distintos tipos de animales y sus caracteristicas.

Todos los animales tienen un nombre, especie y edad. Ademas, todo deben poder emitir un sonido y mostrar su informacion basica.

Crea una clase base Animal con las propiedades y metodos necesarios.

Extender la clase Animal para crear clases especificas como Leon y Elefante que tengan comportamientos y propiedades particulares.
*/

class Animal {
    constructor(
        protected nombre : string,
        protected especie : string,
        protected edad: number
    ){
        this.nombre = nombre
        this.especie = especie
        this.edad = edad
    }

    sonido (){
        return ``
    }

    toString (){ // Para hacer un string devolver toda la info.
        return `
        Name: ${this.nombre}
        Especie: ${this.especie}
        Edad: ${this.edad}
        `
    }
}

class Lion extends Animal {
    constructor(
     nombre : string,
     especie : string,
     edad: number
    ) {
        super(nombre,especie,edad)
    }
    
    sonido(): string {
        return `RAAAWR`
    }

}

type ElephantSize = 'small' |'Medium' |'Large'

class Elephant extends Animal{
    constructor(
     nombre : string,
     especie : string,
     edad: number,
     private size: ElephantSize 
    ) {
        super(nombre,especie,edad)
    }

    sonido(): string {
        return `Prrrrr`
    }

    
    print(): string{
    const info = this.toString()

        return `:\n ${info}\nSize: ${this.size}`}
}      





const l1 = new Lion(`Simba`, `Felino`,8)
console.log (l1.sonido())
console.log (l1.toString())

const l2 = new Elephant (`Dumbo`, `Mamifero`,8,'small')
console.log (l2.sonido())
console.log (l2.print())


