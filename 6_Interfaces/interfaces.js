var pt = { x: 123, y: 123 };
var thomas = {
    id: 1,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom"
};
//nickname in this case is optional
var james = {
    id: 2,
    first: "James",
    last: "Hardy",
    //as you can see no need to add in a nickname here, but you can if you want to.
};
var eric = {
    sayHi: function () { return "Hi"; },
    sayHi2: function () { return "Hi"; }
};
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
//creating a service dog
var chewy = {
    name: "Chewy",
    breed: "Lab",
    bark: function () {
        return "bark";
    },
    job: "guide dog"
};
