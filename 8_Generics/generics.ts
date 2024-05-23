const nums1: number[] = [] //option 1
const nums2: Array<number> = []; //option 2
const color: Array<string> = [];

//another example of build in generic
const inputElement = document.querySelector("#username"); //TS will say this is a "Element | null"
const inputElement2 = document.querySelector<HTMLInputElement>("#username"); //we can not give TS more info on what the exact type is
//another example
const buttonElement = document.querySelector<HTMLButtonElement>("#submit");

//writting our first generic function
//in order for us to pass in a string, number, boolean to a function and get the same result we would need to write it like the below
//as you can see it's a bit much. Instead we can use generics and simulate this in one function
function numberIdentity(item: number): number {return item;}
function stringIdentity(item: string): string { return item;}
function booleanIdentity(item: boolean): boolean { return item;}

//generic version
//what this is saying is that identity takes in a "TYPE" and returns that Type
//so if you pass in a string it returns a string, same with number, boolean etc
function identity<T>(item: T): T { return item; }
//calling it
const genericString = identity<string>("It's me Mario");
const genericNumber = identity<number>(100);
const genericBoolean = identity<boolean>(true);
console.log(`genericString ${genericString} genericNumber ${genericNumber} genericBoolean ${genericBoolean}`);

//another generic example
//here we are taking in an array of elements and returning one element of the same type <number>number[]number for example.
function getRandomElement<T>(list: T[]): T {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement([1, 2, 3])); //here typescript can infer what the type is and we don't need to tell it via <number>

//generic with multiple types
//this is way better than any, as typescript can infer what these are based on what we pass to it.
//by using extends here we are saying that the type must be a object. (called a type constraint)
function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    };
}

const comboObject = merge({ name: "colt" }, { pets: ["blue", "elton"] }); //have a look at comboObject and see what typescript thinks it is.

//another example of type constraint using an interface
interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

//Here is an example of default type parameters
function makeEmptyArray<T = number>(): T[] {
    return [];
}

const nums = makeEmptyArray(); //this will be defaulted to number because of <T = number>.
const bools = makeEmptyArray<boolean>(); //because we passed in boolean here this will now return an array of booleans.

//Writting a generic class
interface Song {
    title: string,
    artist: string
}

interface Video {
    title: string,
    creator: string,
    resolution: string
}

class VideoPlaylist {
    public videos: Video[] = [];
}

class SongPlaylist {
    public songs: Song[] = [];
}

//here we made a generic class that allows us to create playlists out of different objects/strings or whatver we want.
//in this example we are using it to create song/video playlists based off video/song interfaces and using generics to add songs and videos to an array.
class Playlist<T> {
    public queue: T[] = [];
    add(element: T) {
        this.queue.push(element);
    }
}

const songs = new Playlist<Song>();
songs.add({
    title: "Mr Bojangles",
    artist: "Robbie Williams"
});
console.log(`Video Queue: ${songs.queue}`);

const videos = new Playlist<Video>();
videos.add({
    title: "Mr Bojangles - Music Video",
    creator: "Robbie Williams",
    resolution: "1080p"
});
console.log(`Video Queue: ${videos.queue}`);