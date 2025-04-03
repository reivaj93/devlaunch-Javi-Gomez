/*
Crea un program en JavaScript que calcule la factura total de una persona en un hotel,
donde cada hhabitacion tiene un precio de $100 por noche, aprovechando una oferta promocional
que incluye un descuento del 5%

el programa debe solicitar al huesped el numero de noches que paso en el hotel para calcular 
la factura final

Si el usuario ingresa que se quedo 5 noches, la salida sera de $475.00*/

const prompt = require ('prompt-sync')(); // Importa la librería prompt-sync para solicitar entradas al usuario

const horaPorNoche = 100; // Precio por noche
const descuento = 0.05; // Descuento del 5%
const noches = prompt("Ingrese el número de noches que pasó en el hotel: ");

const totalSinDescuento = noches * horaPorNoche; // Total sin descuento
const totalConDescuento = totalSinDescuento - (totalSinDescuento * descuento); // Total con descuento

console.log(`El total a pagar por ${noches} noches es: $${totalConDescuento.toFixed(2)}`); // Muestra el total a pagar