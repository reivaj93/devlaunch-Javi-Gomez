/* En un supermercado se esta realizando una oferta promocional en colabocarion con la tarjeta 
Raw Input, disponible para todos los clientes.

La promocion consiste en proporcionar descuentes en las compras en funcion de un numero espefico, 'n', de productos procesados en la caja. Inicialmente
se aplica un descuento del 20% a los primero 'n' productos.

Posteriormente cada lote sucesivo de n productos recibe un descuento que se reduce a la mitad con respecto al lote anterior.

Por ejemplo, si 'n=3' y el cliente compra 11 productos los primero 3 productos reciben un descuento del 20%, los siguientes 3 reciben un 10%, el lote siguiente
recibe un descuento de 5% y los dos productos finales no califican.

Para que los clientes no ordenen de forma estrategica sus productos para sacar ventaja de un mejor descuento, el programa debe ordenar los productos de menor precio a mayor precio 
primero.

Despues de aplicar los descuentos, el programadebe calcular y mostrar el costo total , el monto del descuento y el precio final a pagar.

calculate([3000, 1000,2000],2)
{total: 5400, subtotal: 6000, discount: 600}

*/

const calculateDiscount = (prices:number[], n :number, basedDiscount: number = 0.2) =>{
    let subtotal = 0
    let discount = 0
    let batchCount = 0

    prices.sort().forEach(price => {
        batchCount ++
        subtotal += price
        
    const discountTime = batchCount === n

    if(discountTime){
        discount += subtotal * basedDiscount
        basedDiscount /= 2
        batchCount = 0
      }
    })

    const total = subtotal - discount

    return {total,subtotal,discount}

}

console.log(calculateDiscount([3000,1000,2000,0],2))