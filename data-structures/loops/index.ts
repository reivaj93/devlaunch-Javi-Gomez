import promptSync from 'prompt-sync'
const prompt = promptSync()

/*
//1. Basic

for (let i = 1; i<=10; i++){
    console.log(i)
}

// //1. Reverse

for (let i = 10; i>=1; i--){
    console.log(i)
}

//2 Increment +2

for (let i = 1; i<=10; i=i+2){
    console.log(i)
}

*/

// While 

let i = 0

while (i >=10){
    console.log(i)
    i++
}

let shouldContinue = true
while (shouldContinue) {
    const userInput = prompt('Should I stop ? yes or not: ')
    const shouldStop = userInput === 'yes'

    if(shouldStop){
        shouldContinue = false

    } else {
        console.log(i)
    }
    i++
}

