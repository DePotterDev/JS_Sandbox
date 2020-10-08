let val;


// NUMBER TO STRING
val = String(5);
val = String(4+4);
// BOOLEAN TO STRING
vall = String(true);
// DATE TO STRING
val = String(new Date());
// ARRAY TO STRING
val = String([1,2,3,4]);

// toString()
val =(5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);     // 1
val = Number(false);    // 0 
val = Number('hello');  //NaN
val = Number([1,2,3])   //NaN

val = parseInt('100.30');
val = parseFloat('100.30');

// OUTPUT
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2)) //parseFloat + fixed = will show both digit after number

const val1 = '5';
const val2 = 6;
const sum = val1 + val2
console.log(sum);
console.log(typeof sum);
// console.log(sum.toFixed(2))

