const studentName = prompt("What is your name?")
let studentId

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function getId(){
 studentId = getRandomInt(1, 4)}

getId()
function display() {
    if (studentId === 1) {
        document.getElementById("output").innerHTML = "<p>" + studentName + ", you are Gryffindor." + "</p>"
    } else if (studentId === 2) {
        document.getElementById("output").innerHTML = "<p>" + studentName + ", you are Slytherin." + "</p>"
    } else if (studentId === 3) {
        document.getElementById("output").innerHTML = "<p>" + studentName + ", you are Ravenclaw." + "</p>"
    } else {
        document.getElementById("output").innerHTML = "<p>" + studentName + ", you are Hufflepuff." + "</p>"
    }
}