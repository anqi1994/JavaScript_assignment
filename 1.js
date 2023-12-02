'use strict'
function calculateSum(a, b) {
    return a + b
}

function getAverage(numbers) {
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    let ans = 
    return sum / numbers.length
}

function getWeather(isRaining) {
    if (isRaining) {
        return 'umbrella';
    }
    else {
        return 'sunglasses';
    }

}

alert('Try?')

console.log(calculateSum(3,4))
console.log(getAverage([1, 2, 3, 4, 5, 6]))
console.log(getWeather(true))