//Input
const person1 = {
    name: "Cliff Amadeus",
    age: 23,
    occupation: "hqr",
    
    // Adding a method to introduce the person
    introduce: function() {
        return `Hi, I'm ${this.name}, a ${this.age}-year-old working as a ${this.occupation}.`;
    }
}

//Process and Output
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("Occupation: " + person1.occupation);

// Displaying the result of the method
console.log(person1.introduce());

// Defining a class called 'Person'
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    introduce() {
        return `Hi, I'm ${this.name}, a ${this.age}-year-old working as a ${this.occupation}.`;
    }
}

// Creating instances of 'Person'
const person2 = new Person("Jordan Smith", 30, "developer");
const person3 = new Person("Alex Doe", 28, "designer");

// Output using the method from the class
console.log(person2.introduce());
console.log(person3.introduce());
