const firstName = 'William';
const lastName = 'Johnson';
const age = 32;
const str = 'Hello there my name is Laurens';
const tags = 'web design, words, word';

let val;

val = firstName + lastName;


// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';


val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";
val = 'That\s awesome, I can\t wait';

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// IndexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// CharAt()
val = firstName.charAt('1');

// Get last char
val = firstName.charAt(firstName.length -1);

// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');


// replace()
val = str.replace('Laurens', 'Jack');

// include()
val = str.includes('Hello'); // True


console.log(val);

