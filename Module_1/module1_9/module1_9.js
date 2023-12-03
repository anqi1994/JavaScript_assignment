'use strict';

function tellPrimeNumber(number) {
    let isPrime = true;
    if (number >= 2) {
        for (let i = 2; i < number; i++ ) {
            if (number % i === 0) {
                isPrime = false
            }
        }
    }
    else {isPrime = false}
    if (isPrime) {
        document.querySelector('#target').innerHTML = `${number} is a prime number.`
    }
    else {
        document.querySelector('#target').innerHTML = `${number} is not a prime number.`
    }
}


let number = parseInt(prompt("Please enter a positive integer: "))
tellPrimeNumber(number)