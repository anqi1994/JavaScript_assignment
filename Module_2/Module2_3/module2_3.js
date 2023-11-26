const names = []
for (let i = 0; i < 6; i++) {
    name = prompt(`Enter the name of No.${i+1} dog:` );
    names.push(name);
}

names.sort();
names.reverse();

let temp = `<ul>\n`;
for (let name of names) {
    temp += `<li>${name}</li>`;
}
temp += `</ul>`;

document.querySelector('#answer').innerHTML = temp;