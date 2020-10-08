// const laurens = {
//     name: 'laurens',
//     age: 30,
// }

// Person constructor
function Person(name, dob){
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob)
    this.getAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);

    }
    console.log(this);
}

const laurens = new Person('laurens', '11-28-1988');
console.log(laurens.getAge());
// const john = new Person('john', 54);
