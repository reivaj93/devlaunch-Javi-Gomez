/* Voy al supermercado GreenCenter para hacer mis comprar habituales y planeo comprar 
manzanas y naranjas.
Cuanto estoy alli, veo que no hay platanos ni uvas, as que cambio un poco mi lista.
Veo que 3 cajeros estann trabajando, asi que me preparo a pagar.
Mis cosas cuestan $100 en total.
Entrego $ 150 en efectivo y recibo $50 en cambio. */
// Escribe tu codigo aqui

const superMarket = 'GreenCenter';
const priority1 = 'manzanas';
const priority2 = 'naranjas';

const noStock1 = 'platanos';
const noStock2 = 'uvas';

const cashiers = 3;

const currency = '$';

const totalCost = 100;

const cash = 150;

const totalCash = cash - totalCost;

console.log(`Cuando me dirigia a ${superMarket} para realizar unas compras revise mi lista, la cual incluye ${priority1} y ${priority2}.\n
Logro conseguirlas, sin embargo para cuando sigo revisando el area de las frutas noto que no hay ${noStock1} ni ${noStock2}.\n
Sin poder agregarlas a mi carrito, me dirijo a la caja donde ${cashiers} cajeros estan trabajando.\n
El total de mis compras es de ${currency}${totalCost}.\n`) 