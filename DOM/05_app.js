// Create the Element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'next-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new lnk element
const link = document.createElement('a');
//  Add class
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// append link in li
li.appendChild(link)

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);