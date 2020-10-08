// Build in constructors

// Strings

const name1 = 'jeff';
const name2 = new String('jeff');

name2.foo = 'bar';

console.log(name2);

console.log(typeof name1);

if(name1 ==='jeff'){
    console.log('yes');
} else {
    console.log('No');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);


// Array

const arr1 = [1,2,3];
const arr2 = new Array(1,2,3)

// Regular Expressions
const re1 = /\w+/;
