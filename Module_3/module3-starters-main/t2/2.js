// Create a list item (li) element
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');

// Create text nodes for the list items
const text1 = document.createTextNode('First item');
const text2 = document.createTextNode('Second item');
const text3 = document.createTextNode('Third item');

// Append the text nodes to the list item
listItem1.appendChild(text1);
listItem2.appendChild(text2);
listItem3.appendChild(text3);

// Get the element with the id "target" and append the list item to it
document.getElementById('target').appendChild(listItem1);
document.getElementById('target').appendChild(listItem2);
document.getElementById('target').appendChild(listItem3);
document.querySelectorAll('li')[1].setAttribute('class', 'my-item')


