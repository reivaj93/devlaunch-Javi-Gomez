const message: string  = 'Hello, World!';
console.log(message);

interface Account{

    id: number;
    name: string;
    balance: number;
    deposit: (amount: number) => void;
}

const createAccount = (id: number, name: string, balance:number = 0): Account => {

    return { 
        id, 
        name, 
        balance ,
        deposit: (amount: number) => {
            console.log(`Depositing ${amount} to account ${id}`);

        }

    }
    }

import promptSync from 'prompt-sync';

const prompt = promptSync();

const result = prompt('message: '); 

console.log(result)

