//Function parameter annotations
//==========================================
function square(num : number) {
    //num.toUpperCase(); this will be allowed and only give an error on compile if the para does not have a type.
    return num * num;
}

square(3);
//square("asd"); this will be allowed and only give an error on compile if the param does not have a type.
//square(true); this will be allowed and only give an error on compile if the param does not have a type.

function greet(person: string = "stranger") {
    // person * person - string * string will not fly here
    return `Hello ${person}`;
}

greet(); //this will output "Hello stranger" if nothing is passed in.
greet("Jade Hendricks")
//greet(true) this will be allowed and only give an error on compile if the param does not have a type.

//Function return annotations
//==========================================
const addNumbers = (x: number, y: number): number => x + y; //here we are saying, we will take in 2 numbers and return a number
addNumbers(5,5);

//this method can either return a number or a string and we use a union to reflect that as the return value
function random(num: number): number | string {
    if (Math.random() < 0.5) {
        return num.toString();
    } else {
        return num;
    }
}

//Anonymous function contextual typing
//==========================================
const colours = ["red", "orange", "yellow"];
//because of how this is called typescript knows that it will be iterating through a array of strings.
colours.map(color => {
    return color.toUpperCase(); //allows to use string methods, becasue typescript knows that this is a string value
});

//The NEVER type
//==========================================
function makeError(msg: string): never {
    throw new Error(msg);
}

//another example is a function that never stops executing
function gameLoop(): never {
    while(true) {
        console.log("Game Loop Running!")
    }
}