'use strict';

function checkNumber(){
    let numberList = []
    while (true) {
        let number = parseFloat(prompt('Please enter a number: '));
        if (numberList.includes(number)) {
            break
        }
        numberList.push(number)
    }
    document.querySelector('#target').innerHTML = numberList.sort((a, b) => a - b)
}

checkNumber()