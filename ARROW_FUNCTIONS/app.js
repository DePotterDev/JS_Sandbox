const SayHello = function(){
    console.log('Hello');
}

// Arrow
const SayGoodbye = ()=> {
    console.log('Goodbye');
}

// One line function does not need braces
const SayAloha = () => console.log('Aloha');

// 
const SayBonjour = () => 'Bonjour';

const SayAveridati = () => ({msg: 'Averidati'});


// single param does not need parenthesis
const sayHello = name => console.log(`Hello ${name}`);

const sayName = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

const users = [ 'Wislon', 'Prometheus', 'Jason'];

// Shorter
const nameLengths = users.map((name)=>{
    return name.length;
});
// Shortest
const nameLengths = users.map(name => name.length);
// const nameLengths = users.map(function(name){
//     return name.length;
// });

console.log(nameLengths);



sayHello('Laurens');

sayName('Laurens', 'de Potter');
SayHello();
SayAloha();
console.log(SayBonjour()); 
console.log(SayAveridati());
SayGoodbye();