/*
El proveedor principal de servicios de telefonia movil en la ciudad esta introduciendo una oferta promocional
basada tanto en el monto de recarga realizado por sus clientes como en la duracion de su suscripcion con la compania.


Para ser elegible para la promocion, los clientes deber recargar un minimo de $20 y un maximo de $80 y habaer estado suscritos durante al menos un ano.

En la prmocion SuperSaver, los clientes pueden disfrutar de un monton de recarga duplicado si su recarga es inferior a $38 y han estado afiliados al servicio por tres anos o menos.

Por otro lado, la promocion MegaRecharge esta dirigida a los clientes que han estado suscritos por mas de tres anos, ofreciendoles un monton de recarga triplicado independientemente del monto.

Tu tarea es desarrollar un programa que tome como entrada el nombre del cliente, el monton de la recarga y la duracion de suscripcion, y determine si la promocion les aplica y calcule el monto
total de recarga incluyendo la promocion.


*/ 

const prompt = require('prompt-sync')();

function promotionSuitable(montoRecarga, duracionSuscripcion, minYear, maxYear, minRecharge, superSaver, megaRecharge) {
    if (montoRecarga < minRecharge || duracionSuscripcion < minYear) {
        return false;
    }

    if (duracionSuscripcion >= maxYear) {
        let nuevoMonto = montoRecarga * megaRecharge;
        console.log("La promo MegaRecharge te brinda!:", nuevoMonto);
        return true
    }

    if (duracionSuscripcion <= 3 && montoRecarga < 38) {
        let nuevoMonto = montoRecarga * superSaver;
        console.log("La promo Supersaver te brinda!: ", nuevoMonto);
        return true
    }

    return false;

    console.log("Monto ajustado (Sin promocion):", montoRecarga);
}

function main() {
    const nombreCliente = prompt('Ingrese el nombre del cliente: ');
    const montoRecarga = parseFloat(prompt('Ingrese el monto de la recarga: '));
    const duracionSuscripcion = parseInt(prompt('Ingrese la duración de la suscripción en años: '));
    
    const minYear = 1;
    const maxYear = 3;
    const minRecharge = 20;
    const maxRecharge = 80;
    const superSaver = 2;
    const megaRecharge = 3;

    const aplicaPromocion = promotionSuitable(montoRecarga, duracionSuscripcion, minYear, maxYear, minRecharge, superSaver, megaRecharge);

    if (aplicaPromocion) {
        console.log(`El cliente ${nombreCliente} califica para la promoción.`);
    } else {
        console.log(`El cliente ${nombreCliente} no califica para la promoción.`);
    }

    console.log(`El monto total de recarga es: $${ montoRecarga}`);
}



main();
