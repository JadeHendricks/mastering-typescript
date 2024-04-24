var activeUser = []; //this will not allow the array to have anything inside of it.
var activeUsers = ["Colt", "James"];
var activeUserIds = [1, 2, 3, 4, 5];
activeUsers.push("Tony");
// activeUsers.push(1); Won't work in this case because it's only a string array
activeUserIds.push(6); //this will work
//Alternative Array type syntax
//both doing the same thing
var bools = [];
var bools2 = [];
var bools3 = [];
var bools4 = [];
bools3.push({ name: "Jade", lastname: "Hendricks" });
bools4.push({ name: "Jade", lastname: "Hendricks" });
//Multidimensional Array and how to type them
var board = [
    ['X', 'Y', 'Z'],
    ['X', 'Y', 'Z'],
    ['X', 'Y', 'Z']
];
var demo = [
    [[1], [1], [1], [1], [1]],
    [[1], [1], [1], [1], [1]],
    [[1], [1], [1], [1], [1]],
    [[1], [1], [1], [1], [1]]
];
