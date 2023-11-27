'use strict';
const names = ['John', 'Paul', 'Jones'];

const html = document.querySelector(`#target`);

for (let name of names) {
    document.querySelector(`#target`).innerHTML += `<li>${name}</li>`
}