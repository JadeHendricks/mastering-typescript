//accepting object as a paramater
function printName(name) {
    console.log("".concat(name.firstName, " ").concat(name.lastName));
}
printName({ firstName: 'Jade', lastName: 'Hendricks' });
printName({ firstName: 'Mick', lastName: 'Jagger' });
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function randomCoordinate2(person) {
    return {
        firstName: person.firstName,
        lastName: person.lastName
    };
}
randomCoordinate2({ firstName: 'Mick', lastName: 'Jagger' });
var mySong = {
    title: 'Unchained Melody',
    artist: 'Righteous Brothers',
    numStreams: 12873321,
    credits: {
        producer: 'Phil Sector',
        writer: 'Alex North'
    }
};
calculatePayment(mySong);
printSong(mySong);
function calculatePayment(song) {
    console.log((song.numStreams * 0.0033));
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var user = {
    id: 12837,
    username: "James"
};
var happyFace = {
    radius: 20,
    colour: 'red'
};
