const numbers = []

while (true) {
    let num = parseFloat(prompt("Please enter a number. Enter 0 to stop: "));

    if (num === 0) {
        break;
    }
    numbers.push(num);
}

numbers.push(0)

console.log(numbers.sort((a, b) => b - a));