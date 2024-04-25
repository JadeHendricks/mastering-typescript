//Introduction Tuples
const test: string[] = ["asasaas", "aasdadda", "121313e"]; //Normal array of strings
//Tuples
const colour: [number, number, number] = [255, 0, 255];

type HttpResponse = [number, string];
const goodResponse: HttpResponse = [200, "OK"];

//Intoducing Enums
enum OrderStatus {
    Pending = 10, //doesn't really matter as the code follows the naming to the value
    Shipped,
    Delivered,
    Returned
}

const statusX = OrderStatus.Delivered;

function isDelivered(status: OrderStatus): void {
    console.log(status === OrderStatus.Delivered);
}

isDelivered(statusX);
