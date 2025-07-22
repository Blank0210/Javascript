// singleton
// Object.create
// Above are ways to create objects in JS. 'singleton' refers to a single instance, 'Object.create' is a method to create objects.



// object literals
// Creating an object using literal syntax
const mySym = Symbol("key1")
// Creating a unique symbol to use as a property key


const User = {
    name: "Adhvaidh",
    // Regular property
    "full name": "Santosh Adhvaidh",
    // Property with space in key, must use quotes
    [mySym]: "mykey1",
    // Symbol property, accessed with [mySym]
    age: 22,
    // Number property
    location: "Vizag",
    // String property
    email: "adhvaidh02h@google.com",
    // Email property
    isLoggedIn: false,
    // Boolean property
    lastLoginDays: ["Monday", "Saturday"]
    // Array property
}

// console.log(JsUser.email)
// Accessing property using dot notation
// console.log(JsUser["email"])
// Accessing property using bracket notation
// console.log(JsUser["full name"])
// Accessing property with space in key using bracket notation
// console.log(JsUser[mySym])
// Accessing symbol property

JsUser.email = "adhvaidh02@chatgpt.com"
// Updating the email property
// Object.freeze(JsUser) 
// Freezes the object, making it immutable
JsUser.email = "adhvaidh02@microsoft.com"
// Attempt to update email after freezing (will not work if frozen)
// console.log(JsUser);
// Logging the object to see changes

JsUser.greeting = function(){
    console.log("Hello JS user");
    // Method added to object, prints greeting
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    // Method using 'this' to access object property
}

console.log(JsUser.greeting());
// Calls greeting method, prints message
console.log(JsUser.greetingTwo());
// Calls greetingTwo method, prints personalized message