const name = prompt("What is your name?")

function display() {
    const message = "Hello " + name + " !";
    document.getElementById("output").innerHTML = "<p>" + message + "</p>";
}
