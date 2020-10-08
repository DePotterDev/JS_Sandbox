const id = 100;

// EQUAL TO
if(id == 100){
    console.log('CORRECT')
} else {
    console.log('INCORRECT');
}

//NOT  EQUAL TO
if(id != 100){
    console.log('CORRECT')
} else {
    console.log('INCORRECT');
}

// EQUAL TO VALUE AND TYPE
if(id === 100){
    console.log('CORRECT')
} else {
    console.log('INCORRECT');
}

// EQUAL TO VALUE AND TYPE
if(id !== 100){
    console.log('CORRECT')
} else {
    console.log('INCORRECT');
}


// Test if undefined
if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
}else {
    console.log('No ID');
}

//  GREATER OR LESS THAN
if(id >= 100){
    console.log('CORRECT')
} else {
    console.log('INCORRECT');
}


//  IF ELSE

const color = 'yellow';

if(color === 'red'){
    console.log('Color is red');
} else if (color === 'blue'){
    console.log('Color is blue');
} else {
    console.log('Color is not blue or red');
}

// LOGICAL OPERATORS

const name = 'Steve';
const age = '11';

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is still young.`);
} else if(age >= 13 && age <=19){
    console.log(`${name} is a teen.`);
} else{
    console.log(`${name} is an adult.`);
}

//  OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

// Without BRACES
if(id === 100)
    console.log('correct');
else
    console.log('incorrect');