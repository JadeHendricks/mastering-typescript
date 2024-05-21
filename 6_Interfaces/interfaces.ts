interface Point {
    x: number,
    y: number,
}

const pt: Point = { x: 123, y: 123 };

//Using readonly and optional properties
interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string
}

const thomas: Person = {
    id: 1,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom"
}

//nickname in this case is optional
const james: Person = {
    id: 2,
    first: "James",
    last: "Hardy",
    //as you can see no need to add in a nickname here, but you can if you want to.
}

//you will not be able ot change th id on this user as we have prefixed it with 'id'
// thomas.id = 100;

// interface methods, 2 different ways of writting it
interface Greeting {
    sayHi?: (name: string) => string;
    sayHi2?(name: string): string;
}

const eric = {
    sayHi: () => {return "Hi"},
    sayHi2: () => {return "Hi"}
}


//interface methods with parameters
interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number
}

const shoes : Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.4));

// extending with interfaces
interface Dog {
    name: string,
    breed: string,
    bark(): string
}

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog"
}

//creating a service dog
const chewy: ServiceDog = {
    name: "Chewy",
    breed: "Lab",
    bark() {
        return "bark"
    },
    job: "guide dog"
}