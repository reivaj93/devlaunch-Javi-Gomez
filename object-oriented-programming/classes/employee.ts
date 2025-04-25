/* 
Horizon Innovartions, una destacada empresa enfocada en el bienestar de los empleados, esta desarrollando un sistema de seguimiento de salarios 
que busca mantener registros precisos de las remuneraciones de los empleados, incluyendo actualizaciones y modificaciones salariales.

Para gestionar y manipular los datos salariales de manera eficiente, es util encapsularlos en un sistema de clases. Este enfoque proporciona una 
estructura clara y organizada para manejar las operaciones relacionadas con los salarios, asegurando la modularidad y la mantenibilidad del código.

Para implementar esto, crearemos una clase Employee con una variable principal llamda +salary, que servira como la base para todos los calculos
 de salario en el sistema.

 Esta clase incluira dos metodos clave: un "getter" para recuperar el salario actual y un "setter" para modificarlos. Es importante que el "setter"
 valide que el nuevo valor de salario sea positivo ya que no se permiten salarios negativos.

 Adicionalmente, se incluira un metodo giveRaise para aumentar el salario en una cantidad especifica.
*/

class Employee {
    constructor (
        public _firstName:string,
        public _lastName:string,
        private _salary:number
    
    ) {
        this._firstName = _firstName,
        this._lastName = _lastName,
        this._salary= _salary
    }

set salary (salary:number) {
    if (salary>0){
        this._salary = salary
    }
}

get salary () {
    return this._salary
}

giveRaise (amount:number){
    const newSalary = this._salary + amount
    this._salary = newSalary
    return newSalary
    }
}



const e1 = (new Employee("Simba", "Lion", 1000))
const e2 = (new Employee("Daniela", "Araya", 7000))
const e3 = (new Employee("Juan", "Pérez", 5000))

console.log (e1)
console.log (e2)
console.log (e3)

console.log (e1.giveRaise(500))
console.log (e2.giveRaise(1500))
console.log (e3.giveRaise(2500))

console.log (e1)
console.log (e2)
console.log (e3)

