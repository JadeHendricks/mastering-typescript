export interface User {
    name: string,
    age: number,
    email: string,
    password: string,
    phone?: string,
    address?: string,
    city?: string
}

//Utility type - Omit
//allows us to take a interface/type and create a new interface or type without the values we pass in
type UserProfile = Omit<User, "password" | "email">; //this is how we do it with types - you can inspect the type to see the omitted values.
interface UserProfileInterface extends Omit<User, "password" | "email"> {} //this is how we do it with interfaces - you can inspect the interface to see the omitted values.

//Utility type - Pick
//pick works exactly like omit but in the opposite direction - we will end up with a type/interface with those values only.
type UserProfilePick = Pick<User, "phone" | "name" | "email">; //this will only have those picked values in the type

//Utility type - Partial
//partial is going to take every property on a type and make it optional
type UserPartial = Partial<User>; //if you inspect the type you will see that every property on the type is optional
//we able to make everything optional except for a certain property and this is how you do that::
type UserPartial2 = Partial<User> & {name: string} //now you need to have name

//Utility type - Required
//required will make every property on the type required and not allow it to be optional even if it is set to optional.
type UserRequired = Required<User>; //if you inspect the type you will see that every property on the type is required.
//we able to make everything required except for a certain property and this is how you do that::
type UserRequired2 = Required<User> & {city?: string};

//Utility type - Record
//Record allows you to define an objects key and type
//good for typing generic objects that you know the structure of.
const users: Record<string, {name: string}> = {
    "1" : {
        name: "Hello there"
    }
}

//Utility type - ReturnType
//Allows us to get the return type of a return value from a function
const func = () => {
    return "string";
}

type Return = ReturnType<typeof func>; //here we get the type that this function is returning i.e string
//what if the function was async, how would you handle it - 
const func2 = async() => {
    return "string";
}

type Return2 = ReturnType<typeof func2>; //this will be "Promise<string>" We may not want that and only want the string - we can do this by using Awaited<>
type Return3 = Awaited<ReturnType<typeof func2>>; //this will only give us a type of string back (gives us the result of the promise)

//Extra - as const
//allows you to freeze an object - making it read only.
//when using as const it will type the values of an object to the values themselve and not string for example::
const routes = {home: "/", admin: "/admin", users: "/users"} //here all the types are strings and public
const routes2 = {home: "/", admin: "/admin", users: "/users"} as const; //here all the types are the values themselves and readonly

//type Route = (typeof routes); //this gives us type Routes { home:string, admin:string, users:string }
type Route = (typeof routes2)[keyof typeof routes2]; //this gives us type Route = "/" | "/admin" | "/users"

const goToRoute = (route: "/" | "/admin" | "/users") => {};
const goToRoute2 = (route: Route) => {};
// goToRoute(routes.admin); //here we are getting an error saying string is not assignable to ("/" | "/admin" | "/users")
goToRoute(routes2.admin);