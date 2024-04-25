//Introducing Union Types
const passInYourAge = (age: number | string) : void => {
    console.log(`Your age is: ${age}`);
}

passInYourAge(30);
passInYourAge("30");

let age: number | string | boolean = 21;
age = "30";
age = true;
age = 30;

//Union types and arrays
const stuff : (string | number | boolean)[] = ["Hello World", 123456, true];

// Literal Types
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
    return `The answer is ${answer}`;
}

giveAnswer("no");
// giveAnswer("Oh boy I'm not sure");

let pie: 3.16  = 3.16;
// pie = 20; will not work because the value is not 3.16

let mood: "happy" | "sad"  = "happy";
mood = "sad";
// mood = "test";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
let today: DayOfWeek = "Thursday";

