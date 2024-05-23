//type of guard
//we can use type of gaurds to make sure we are using the correct methodf son the correct types
function triple(value: number | string): number | string {
    if (typeof value === "string") {
        return value.repeat(3);
    }

    return value * 3;
}

//Using the in operator
//by using the in operator here it will allow typescript to narrow in on a type that it thinks it is (will add inline comments)
//we generally use "IN" with interfaces/types in order to narrow down a type
interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRunTime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration; //if you inspect media here you will see that TS knows that this is now a TV show because numEpisodes is in it
    }

    return media.duration; //we returned above so TS knows this could only be of type Movie
}
console.log(getRunTime({title: "Amadeus", duration: 140})); //using in TS knows what to do with these calls
console.log(getRunTime({title: "Spongebob", numEpisodes: 80, episodeDuration: 30}));

//Discriminated Unions
//Common pattern in TS involves creating literal property that is common across multiple types.
//We can then narrow the type using that literal type.
interface Rooster { kind: "rooster", name: string, weight: number, age: number }
interface Cow { kind: "cow", name: string, weight: number, age: number } 
interface Pig { kind: "pig", name: string, weight: number, age: number }

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.kind) { //now we can use kind to run different outcomes for each animal
        case("pig"):
            return "Oink!";
        case("cow"):
            return "Mooooo!";
        case("rooster"):
            return "Cockadoodledoo!";
        default:
            return "Please add in a kind of animal!"
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
}

const piggy: Pig = {
    name: "Piggy Jones",
    weight: 2,
    age: 1.5,
    kind: "pig"
}

//ETCETC
console.log(getFarmAnimalSound(stevie));
console.log(getFarmAnimalSound(piggy));

