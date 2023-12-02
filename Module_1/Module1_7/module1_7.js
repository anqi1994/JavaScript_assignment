'use strict';

function rollDice(side, time) {
    let sum = 0;
    for (let i = 0; i < time; i++ ) {
        let number = Math.round(Math.random()*side)+1;
        sum += number
    }
    let sumString = sum.toString()
    return document.querySelector('#target').innerHTML = 'The sum of these rolls ' +
        'are: ' + sumString;
}

let side = parseInt(prompt("How many sides do you want for your dice?"))
let time = parseInt(prompt('How many times do you want to roll the dice?'))

rollDice(side, time)