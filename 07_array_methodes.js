// Create some arrays
const numbers = [43, 56, 33, 58, 99, 12, 18];
const numbers2 = new Array (44, 55, 11, 12, 77, 85);
const fruit = ['Apple', 'Banana', 'Caju', 'Pineapple'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];


let val;

// // Get array lenght

// val = numbers.length;
// // check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0]
// // Insert in array
// numbers[2] = 100;
// //  Find index of value
// val = numbers.indexOf(99);

// // MUTATING ARRAYS
// // Add to the end
// numbers.push(250);

// //Add to the front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from the front
// numbers.shift();

// // Splice values
// numbers.splice(1,1);
// // Reverse
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // Sorting Arrays
// val = fruit.sort();
// val = numbers.sort();

// Use the "compare function"
// val = numbers.sort(function(x,y){
//     return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x,y){
//     return y - x;
// });

// Find 
function under50(num){
    return num < 50;
}

val = numbers.find(under50);



console.log(numbers);
console.log(val);