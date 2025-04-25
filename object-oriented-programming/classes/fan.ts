/* 
Cuando se trata de ventiladores, a menudo presentan caracteristicas distintivas como configuraciones de velocidad, tamano, potencia medida en vatios
o caballos de fuerza, tipo y color.

Para manejar y modificar adecuadamente las caracteristicas de un ventilador, es util organizarlas en un sistema de clases. De esta manera, se obtiene 
una estructura clara para trabajar con las propiedades del ventilador, facilitando la compresion, reutilizacion y mantenimiento del codigo. 

Para aboprdar esta tarea, crearemos una clase que encapsule los diferentes atributos de un ventilador. 
Esta clase incluira un constructor para inicializar dichos atributos y metodos como getter y setters para acceder y modificarlos segun sea necesario. 

Al implementar esta estructura de clase, podremos representar y gestionar de manera eficiente las caracteristicas de los ventiladores en nuestro sistema. 

Esta clase esta disenada para proporcionar todas las caracteristicas esenciales del ventilador desde el momento de su creacion.

*/

type FanSize = "pequeño" | "mediano" | "grande";
type FanType = "de pie" | "de mesa" | "de pared" | "de ventana" | "portatil" | "industrial";
type FanSpeed = 0 |1 | 2 | 3 | 4 | 5;
type FanPower = 0 | 100 | 200 | 300 | 400 | 500; 
type FanColor = "blanco" | "negro" | "gris" | "azul" | "rojo" | "verde" | "amarillo" | "naranja" | "morado" | "rosa";



class Ventilador {
    constructor(
    public velocity:FanSpeed,
    public size:FanSize,
    public power: FanPower,
    public type: FanType,
    public color: FanColor,
 
){
    this.velocity = 0,
    this.size = size,
    this.power = power,
    this.type = type,   
    this.color = color
}

public setSize (size : FanSize) {
    this.size = size
}

public getSize (){
    return this.size
}

public setPower (power: FanPower) {
    this.power = power
}

public getPower (){
    return this.power
}

public setType (type: FanType) {
    this.type = type
}

public getType (){
    return this.type
}

public setColor (color: FanColor) {
    this.color = color
}

public getColor (){
    return this.color
}

}


const v1 = (new Ventilador(3, "mediano", 100, "de pie", "blanco"))
v1.setColor('negro')
v1.setSize('grande')
v1.setType('de pared')
v1.setPower(500)
console.log(v1)


