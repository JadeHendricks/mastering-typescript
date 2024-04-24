const activeUser: [] = []; //this will not allow the array to have anything inside of it.
const activeUsers: string[] = ["Colt", "James"];
const activeUserIds: number[] = [1, 2, 3, 4, 5];
activeUsers.push("Tony");
// activeUsers.push(1); Won't work in this case because it's only a string array
activeUserIds.push(6); //this will work

type Username = {
    name: string,
    lastname: string
}

//Alternative Array type syntax
//both doing the same thing
const bools: Array<boolean> = [];
const bools2: boolean[] = [];
const bools3: Array<Username> = [];
const bools4: Username[] = [];
bools3.push({name: "Jade", lastname: "Hendricks"});
bools4.push({name: "Jade", lastname: "Hendricks"});

//Multidimensional Array and how to type them
const board: string[][] = [
    ['X', 'Y', 'Z'],
    ['X', 'Y', 'Z'],
    ['X', 'Y', 'Z']
];

const demo: number[][][] = [
    [[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1]],
    [[1],[1],[1],[1],[1]]
];