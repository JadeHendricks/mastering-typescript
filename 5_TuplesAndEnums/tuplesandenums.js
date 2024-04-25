//Introduction Tuples
var test = ["asasaas", "aasdadda", "121313e"]; //Normal array of strings
//Tuples
var colour = [255, 0, 255];
var goodResponse = [200, "OK"];
//Intoducing Enums
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Returned"] = 3] = "Returned";
})(OrderStatus || (OrderStatus = {}));
var statusX = OrderStatus.Delivered;
function isDelivered(status) {
    console.log(status === OrderStatus.Delivered);
}
isDelivered(statusX);
