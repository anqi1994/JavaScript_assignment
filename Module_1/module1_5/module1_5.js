const year = parseInt(prompt("Please enter the year:"))

function get_leap_year() {
    if ( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("output").innerHTML =
            "<p>" + year + " is a leap year." + "</p>"
    }
    else {
        document.getElementById("output").innerHTML =
            "<p>" + year + " is not a leap year." + "</p>"

    }
}