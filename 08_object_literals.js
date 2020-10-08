const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@ail.com',
    hobbies: ['music', 'travel', 'cooking'],
    address: {
        city: 'Miami',
        state: 'FL',
    },
    getBirthYear: function(){
        return 2017 - this.age;
    },

}

let val;

val = person;

// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[2];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();



console.log(val)

const people = [
    {name: 'John', age:30},
    {name: 'Nagini', age:105},
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}