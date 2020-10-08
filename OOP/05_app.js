// Using Object.create


const personPrototypes = {
    greeting: function(){
       return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'de Potter';
mary.age = 30;

mary.getsMarried('Santos');

console.log(mary.greeting());

const laurens = Object.create(personPrototypes, {
    firstName: {value: 'Laurens'},
    lastName: {value: 'de Potter'},
    age: {value: 36},

});

console.log(laurens.greeting());
