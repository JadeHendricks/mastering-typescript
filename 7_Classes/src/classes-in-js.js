"use strict";
// a blueprint of proerties and methods that can be created - multiple times
class Player {
    //every instance will have this, but it is always hardcoded.
    #score = 9001; //using # makes this property private
    numLives = 10;
    static description = "Player In Our Game"; //when using the static keyword this is only accessable on the class itself
    //runs as soon as a new instance is created from it - runs by itself
    //good for setting properties
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#showSecret();

        console.log("In Constructor")
    }

    //when using the static keyword this is only accessable on the class itself
    static randomPlayer() {
        return new Player("Andy", "Samberg");
    }

    //one way of writting it and needs to be called as a method
    getScore() {
        return this.#score;
    }

    //another way of writting it and can be called as a property and all setting this value will be ignored unless a setter has been made
    get score() {
        return this.#score;
    }

    //a way to update a private property and also allows us to write some logic to lock down the value to our conditon
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score needs to be more than 0");
        }

        this.#score = newScore;
    }

    //another example
    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }

    taunt() {
        console.log("Booyah!");
    }

    loseLife() {
        return this.numLives -= 1;
    }

    #showSecret() {
        console.log("Shhh this is a secret - you can't call me :)");
    }
}

class AdminPlayer extends Player {
    isAdmin = true;
    
    constructor(firstName, lastName, powers) {
        super(firstName, lastName); //this runs the super constructor and sets these values so that we can use it in our new class.
        //without using super here only this powers will be set. 
        //if Admin Player didn't have a constructor the parents constructor will set values FIRST/LAST/NAME
        this.powers = powers;
    }
}

const player1 = new Player("Jade", "Hendricks");
player1.taunt();
console.log(player1.firstName + " " + player1.lastName);
console.log(player1.loseLife());
console.log(player1.getScore()); //custom getter
console.log(player1.score); //getter
console.log(player1.score = 9000); //setter
console.log(player1.fullname);
console.log(Player.description);
console.log(player1);

console.log("****************************************************");

const player2 = new Player("Blue", "Steele");
player2.taunt();
console.log(player2.firstName + " " + player2.lastName);
console.log(player2.loseLife());
console.log(player2.getScore());
console.log(player2.score);
console.log(player2.fullname);
console.log(Player.description);
console.log(player2);

console.log("****************************************************");

const mrAdmin = new AdminPlayer("Jade", "Hendricks", ["delete", "save"]);
console.log(mrAdmin);