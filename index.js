// Class definition
class Person {
    constructor(attribute1, attribute2, attribute3) {
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
        this.attribute3 = attribute3;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log(this.attribute1);
        console.log(this.attribute2);
        console.log(this.attribute3);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Attribute 1:</strong> ${this.attribute1}<br>
            <strong>Attribute 2:</strong> ${this.attribute2}<br>
            <strong>Attribute 3:</strong> ${this.attribute3}
        `;
    }
}

// Creating an object (instance) of the Person class
const personOne = new Person('Cliff', 23, 'Instructor');

// Calling methods
personOne.displayInfo(); 
personOne.displayInfoHTML(); 
