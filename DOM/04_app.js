let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// GET CHILD NODES
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// GET CHILDEREN ELEMENT NODES
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';
// Children of children
list.children[2].children[0].id = 'test-link';
val = list.children[2].children[0];

// FirstChild
val = list.firstChild;
val = list.firstElementChild;


// LastChild
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling


console.log(val);