/*
Estas disenando un sistema basico para gestionar cuentas bancarias de clientes.

Cada cuenta bancaria tendra un identificaodr unico, un nombre del titular y un saldo.

Tu tarea es crear una funcion createAccount que genere un objeto de cuenta bancaria.

el objeto debe ser creado por medio de una function declaration, con toas las propiedades y metodos deben estar definidos dentro de la funciona usando this.

Propiedades de la cuenta bancaria (dentro de la funcion usando this):

id: identificaodr unico de la cuenta.
holderName: nombre del titular de la cuenta.
balance: saldo de la cuenta.
Metodos de la cuenta bancaria (dentro de la funcion usando this):

deposit (amount): incrementa el saldo de la cuenta.
withdraw(amount)L disminuye el saldo de la cuenta si hay suficientes fondos.
transfer(toAccount, amount): transfiere fondos de la cuenta actual a otra cuenta si hay suficientes fondos.

*/

interface AccountShape {
    id: number
    name: string
    balance:number
    deposit: (amount: number) => void
    withdraw: (amount: number) => number | null
    transfer: (amount: number, toAccount: AccountShape) => AccountShape | null
}

const Account = function (id:number, name:string, balance:number = 0) {
    this.id = id
    this.name = name
    this.balance = balance

this.deposit = (amount: number) => {
    this.balance += amount
    return this
}

this.withdraw = (amount: number) => {
    if (this.balance >= amount) {
        this.balance -=amount
    } else{
        console.log ('Fondos insuficientes')
    }
}

this.transfer = (toAccount: AccountShape, amount: number) => {
    if (this.balance >= amount) {
        this.balance -=amount
        
        this.balance += amount
        toAccount.balance += amount

    return this
}}}

const acc1 : AccountShape = new (Account as any)(1,'Javi', 10000)
const acc2 : AccountShape = new (Account as any)(2,'Luis', 5000)


console.log(acc1)
console.log (acc1.deposit(5555))
console.log (acc1.withdraw(5000))
console.log (acc1.transfer(5000, acc2))
console.log (acc1)
console.log (acc2)
 
