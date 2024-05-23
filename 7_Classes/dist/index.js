"use strict";
class Player {
    constructor(first, last) {
        this.effort = "ANY"; //protected meaning accessible only inside this class and classes that extend this class
        //similar to #score, but on compile it is not compiled to that only in the dev phase. Access is only available inside of the class
        this.score = 0; //this is inferred to a number and we don't need to add the number type to it.
        this.first = first;
        this.last = last;
    }
    //constructor shorthand - TS only (Known as Parameter Properties)
    //constructor(public first, public last) {} //doing it this way we don't need to init properties above and set them inside of the constructor, it is all done for us.
    secretMethod() {
        console.log("I am a secret method");
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxEffort() {
        this.effort = "MAX"; //we are only able to acces this value from the parent because it is protected
        console.log(this.effort);
    }
}
const elton = new Player("Elton", "Steele");
const superElton = new SuperPlayer("Elton", "Steele");
superElton.maxEffort();
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`I love a jacket from ${this.brand} in the color of ${this.color}`);
    }
}
const nikeJacket = new Jacket("Nike", "Black");
nikeJacket.print();
//Abstract classes
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    // abstract nopay(): number; //this will cause an error for all that don't add it
    greet() {
        console.log("Hello!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = 9000;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
const james = new FullTimeEmployee("James", "Brown", 9000);
james.getPay();
