const name = "Adhvaidh";
const age = 22;

console.log(`Hello my name is ${name} and I am ${age} years old`);

const gameName = new String("Call-of-Duty");

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__); // String object prototype // {}

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(0));
console.log(gameName.indexOf("D"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   adhvaidh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://adhvaidh.com/adhvaidh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));