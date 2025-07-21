const score = 300;
// console.log(score);

const balance = new Number(1000.50);
// console.log(balance);

// console.log(balance.toFixed(2)); // Formats the number to 2 decimal places
// console.log(balance.toString()); // Converts the number to a string
// console.log(balance.toString().length); // Gets the length of the string representation

const otheNumber = 123.345;
console.log(otheNumber.toPrecision(4)); // Formats the number to 4 significant digits

const hundreds = 100000000000
// console.log(hundreds.toLocaleString('en-US')); // Formats the number with commas for thousands

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)