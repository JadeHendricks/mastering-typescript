//Introducing Union Types
var passInYourAge = function (age) {
    console.log("Your age is: ".concat(age));
};
passInYourAge(30);
passInYourAge("30");
var age = 21;
age = "30";
age = true;
age = 30;
//Union types and arrays
var stuff = ["Hello World", 123456, true];
// Literal Types
var giveAnswer = function (answer) {
    return "The answer is ".concat(answer);
};
giveAnswer("no");
// giveAnswer("Oh boy I'm not sure");
var pie = 3.16;
// pie = 20; will not work because the value is not 3.16
var mood = "happy";
mood = "sad";
var today = "Thursday";
