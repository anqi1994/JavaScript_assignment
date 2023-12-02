const answer = confirm('Should I calculate the square root?')

if (answer === true) {
    number = parseFloat(prompt('Please enter the number: ' ));
    if (number < 0) {
        document.querySelector('#target').innerHTML = 'The square root of' +
            'a negative number is not defined.';}
    else{let root = Math.sqrt(number)
        document.querySelector('#target').innerHTML = 'answer: ' + root
    }
}
else {document.querySelector('#target').innerHTML = 'The square root is not calculated.'}