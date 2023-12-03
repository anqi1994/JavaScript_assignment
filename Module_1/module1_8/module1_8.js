'use strict';

function getLeapYear(start_year, end_year) {
    let leapYears = []
    for (let year = start_year; year <= end_year; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ) {
            leapYears.push(year)
        }
    }
    const list = document.getElementById('target');
    const unorderedList = document.createElement('ul');
    for (let leapYear of leapYears) {
        let listItem = document.createElement('li');
        listItem.textContent = leapYear
        unorderedList.appendChild(listItem)
    }
    list.appendChild(unorderedList)
}

let start_year = parseInt(prompt("Enter the start year: "))
let end_year = parseInt(prompt("Enter the end year: "))
getLeapYear(start_year, end_year)