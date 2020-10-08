class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `hello there, ${this.firstName}`
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getsMarried(newLastName){
        this.lastName = newLastName;
    }
    static addNumbers(x, y){
        return x + y;
    }
}

const laurens = new Person('laurens', 'de Potter', '11-28-1988');

laurens.getsMarried('Monoque');

console.log(laurens);
console.log(Person.addNumbers(2,3));