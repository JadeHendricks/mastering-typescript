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
