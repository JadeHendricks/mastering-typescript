class Player {
    //readonly(typescript) is used to set something once and not allowing it to be changed again.
    public readonly first: string; //it's already public by default, we still can't overwrite the inital value.
    public readonly last: string;
    protected effort: string = "ANY"; //protected meaning accessible only inside this class and classes that extend this class

    //similar to #score, but on compile it is not compiled to that only in the dev phase. Access is only available inside of the class
    private score = 0; //this is inferred to a number and we don't need to add the number type to it.
    
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    //constructor shorthand - TS only (Known as Parameter Properties)
    //constructor(public first, public last) {} //doing it this way we don't need to init properties above and set them inside of the constructor, it is all done for us.

    private secretMethod() {
        console.log("I am a secret method");
    }
}

class SuperPlayer extends Player {
    isAdmin: boolean = true;
    maxEffort() {
        this.effort = "MAX"; //we are only able to acces this value from the parent because it is protected
        console.log(this.effort)
    }
}

const elton = new Player("Elton", "Steele");
const superElton = new SuperPlayer("Elton", "Steele");
superElton.maxEffort();
// elton.secretMethod() //this is not accessable outside of the class
// elton.score //this is not accessable outside of the class


//interfaces are blueprints to objects and classes and are used to implement them with required methods or properties.
interface Colourful {
    color: string;
}
interface Printable {
    print(): void;
}

class Jacket implements Colourful, Printable {
    constructor(public brand: string, public color: string) {}

    print(): void {
        console.log(`I love a jacket from ${this.brand} in the color of ${this.color}`);
    }
}

const nikeJacket = new Jacket("Nike", "Black");
nikeJacket.print();

//Abstract classes
abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number;
    // abstract nopay(): number; //this will cause an error for all that don't add it
    greet(): void {
        console.log("Hello!");
    }
}

class FullTimeEmployee extends Employee {
    private salary: number = 9000;
    constructor(first: string, last: string, salary: number) {
        super(first, last)
        this.salary = salary;
    }

    getPay(): number {
        return this.salary;
    }
}

const james = new FullTimeEmployee("James", "Brown", 9000);
james.getPay();