// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
    // if(typeof firstName === 'undefined'){firstName = 'John'}
    // if(typeof lastName === 'undefined'){lastName = 'John'}
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet('Laurens'));

// FUNCTION EXPRESSIONS 

const square = function(a = 3){
    return a*a;
};

// console.log(square(8));

// IMMEDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IFE ran ...');
// })();


(function(name){
    console.log('hello ' + name);
})('Laurens');


// PROPERTY METHODS
const todo = {
    add: function(){
        console.log(`Add todo...`);
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log(`Delete todo ...`);
}

todo.add();
todo.edit('my name')

todo.delete();