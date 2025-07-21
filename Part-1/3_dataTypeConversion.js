let score = 33;

// "33" is a string, not a number
// "33abc" => NaN (Not a Number)
// true = 1, false = 0

console.log(typeof score); // number
console.log(typeof "33"); // string

score = "abc"
console.log(typeof score); // string

let valueConverted = Number(score); // Convert string to number
console.log(valueConverted); // NaN
console.log(typeof valueConverted); // number

let isLoggedIn = true;
let booleanIsLoggedIn = Boolean(isLoggedIn); // Convert boolean to number
console.log(booleanIsLoggedIn); // true

// "" => false
// "adhvaidh" => true