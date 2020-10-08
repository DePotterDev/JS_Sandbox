// FOR LOOP

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my favorite number');
        continue;
    }

    if(i === 5){
        console.log('stopping the loop');
        break;
    }

    console.log(`counting...${i}`);

};


// WHILE LOOP

let j = 0;

while(j < 10){
    console.log('Number ' + j);
    j++;
}


// DO WHILE

let k = 100;

do{
    console.log('Numbero ' + k);
    k++;
}

while ( k < 10);


// LOOP THROUGH ARRAY
const cars = ['Ford', 'Kia', 'Chevy', 'BMW', 'Volkswagen'];
cars[1];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// FOREACH
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

// MAP
const users = [
    {id: 1, name:'Laurens'},
    {id: 2, name:'Laurentius'},
    {id: 3, name:'Lorenzo'},
];

const ids = users.map(function(user){
    return user.name;
});

console.log(ids);


// FOR INN LOOP

const user ={
    firstName : 'Laurens',
    lastName : 'de Potter',
    age : 31,
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}