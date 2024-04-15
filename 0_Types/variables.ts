//strings
//==========================================
let movieTile: string = "Spiderman";
movieTile.toUpperCase();
// movieTile = 12; can't assign a number to a string

//numbers
//==========================================
let numCatLivs: number = 9;
numCatLivs++;
// numCatLivs = "8"; can't assign a string to a number

//booleans
//==========================================
let gameOver: boolean = false;
gameOver = true;
// gameOver = "false" can't assign a string to the type of boolean

//Type Inference
//==========================================
//Typescript can Infer the type you want when you assign it directly
let tvShow = "that 70s show";
tvShow = "Futurama";
//tvShow = false; Type 'boolean' is not assignable to type 'string'

let isFunny = false;
isFunny = true
//isFunny = "true"; Type 'string' is not assignable to type 'boolean'

//Delayed Initialization and implicit Any
//==========================================
const movies = ["Arrival", "The Thing", "Aliens", "James Bond"];

let something; //any
let foundMovie; //would be infered as "any" because of Delayed Initialization allowing us to do anything we want and will only throw errors when it gets compiled.
let foundMovie2: string;

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie2 = "Amadeus";
    }
}

//why we should avoid using any
// foundMovie();
// foundMovie = 1;
// foundMovie.adsadda();