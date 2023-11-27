'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const peopleList = document.getElementById(`target`);

for (let student of students) {
  const oneOption = document.createElement('option');

  oneOption.value = student.id;
  oneOption.textContent = student.name;

  peopleList.appendChild(oneOption);
}