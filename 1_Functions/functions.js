//Function parameter annotations
//==========================================
function square(num) {
    //num.toUpperCase(); this will be allowed and only give an error on compile if the para does not have a type.
    return num * num;
}
square(3);
//square("asd"); this will be allowed and only give an error on compile if the param does not have a type.
//square(true); this will be allowed and only give an error on compile if the param does not have a type.
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    // person * person - string * string will not fly here
    return "Hello ".concat(person);
}
greet(); //this will output "Hello stranger" if nothing is passed in.
greet("Jade Hendricks");
//greet(true) this will be allowed and only give an error on compile if the param does not have a type.
//Function return annotations
//==========================================
var addNumbers = function (x, y) { return x + y; }; //here we are saying, we will take in 2 numbers and return a number
addNumbers(5, 5);
//this method can either return a number or a string and we use a union to reflect that as the return value
function random(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    else {
        return num;
    }
}
//Anonymous function contextual typing
//==========================================
var colours = ["red", "orange", "yellow"];
//because of how this is called typescript knows that it will be iterating through a array of strings.
colours.map(function (color) {
    return color.toUpperCase(); //allows to use string methods, becasue typescript knows that this is a string value
});
//The NEVER type
//==========================================
function makeError(msg) {
    throw new Error(msg);
}
//another example is a function that never stops executing
function gameLoop() {
    while (true) {
        console.log("Game Loop Running!");
    }
}
