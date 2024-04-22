//accepting object as a paramater
function printName(name: {firstName: string, lastName: string}): void {
    console.log(`${name.firstName} ${name.lastName}`);
}

printName({firstName: 'Jade', lastName: 'Hendricks'})
printName({firstName: 'Mick', lastName: 'Jagger'})

let coordinate: {x: number, y: number } = {x: 34, y: 2};

function randomCoordinate(): {x: number; y: number} {
    return {x: Math.random(), y: Math.random()};
}

//Creating Type Aliases
type Person = {
    firstName: string,
    lastName: string,
    age?: number //this is optionala nd it will allow it to get passed in, but it is not required for the function to run.
}

function randomCoordinate2(person: Person): Person {
    return {
        firstName: person.firstName,
        lastName: person.lastName
    }
}

randomCoordinate2({firstName: 'Mick', lastName: 'Jagger'})

//Creating Type Aliases with nested objects
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string, writer: string }
};

const mySong: Song = {
    title: 'Unchained Melody',
    artist: 'Righteous Brothers',
    numStreams: 12873321,
    credits: { 
        producer: 'Phil Sector', 
        writer: 'Alex North' 
    }
}

calculatePayment(mySong);
printSong(mySong);

function calculatePayment(song: Song): void {
    console.log((song.numStreams * 0.0033)) 
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}


//Using readonly with Types
type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 12837,
    username: "James"
};

// user.id = 300 You cannot write to this property only read it. Hence the read only.

//Creating intersection types.
type Circle = {
    radius: number;
}

type Colourful = {
    colour: string;
}

type ColourfulCirle = Circle & Colourful;

const happyFace: ColourfulCirle = {
    radius: 20,
    colour: 'red'
}
