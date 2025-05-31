/*

Crea un programa que simule la operacion de una maquina expendedora, permitiendo a un usuario
seleccionar de una lista de productos e insertar monedas hasta que alcance o supere la cantidad
requerida para su producto elegido.

La maquina expendedora solo aceptara denominaciones de monedas especificas, y si el usuario inserta
mas del monton requerido, debera devolver el exceso como cambio.

La maquina expendedora tiene tres productos : A(🍔), B(🍕) y C(🌮)

Cada producto tiene un precio especifico : A cuesta $14, B cuesta $10, C cuesta $8

Muestra la lista de productos con los precios correspondientes e iconos al usuario

La maquina acepta monedas en denominaciones de $1, $2, $5 y $10. Muestra las monedas aceptadas al
usuario y pideles que inserten una de estas cantidades.

Pide al usuario que selecciones un producto esribiendo su letra corresondiente (A,B,C)
Si el usuario ingresa una opcion invalid, el programa debe perdile nuevamente hasta que de una seleccion
valida.

Despues de seleccionar un producto,solicita al usuario que inserte monedas hasta que el monton total
insertado coincida o exceda el precio del producto seleccionado.

Lleva el registro de la cantidad insertada y muestra el balance al usuario despues de cada insercion 
de moneda. Una vez que se alcanza el monto requerido:

Muestra el producto seleccionado y un mensaje confirmando la compra. Calcula y muestra cualquier 
cambio si la cantidad insertada excede el precio del produto

Limpia la consola despues de cada insercion de moneda y solicitud de seleccion de productos para una
experiencia de usuario mas limpia.

Ejemplo 

El usuario selecciona el productos A(🍔) con un precio de $14/
El usuario comienza a insertar monedas: inserta $5 Balance $5, Inserta $10 Balance $15

La maquina confirma la compra de A(🍔) y devuelve $1 como cambio. Requisitos adicionales.

Implementa validacion de entrada de monedas para evitar monedas invalidas o monedas no numericas.
24:02*/

