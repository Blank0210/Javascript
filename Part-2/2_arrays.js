const marvel_heros = ["thor", "hulk", "ironman", "spiderman", "captain america"];
const dc_heros = ["batman", "superman", "wonder women"];

const all_heros = marvel_heros.concat(dc_heros); // Adds the entire dc_heros array as a single element
console.log(all_heros); // ["thor", "hulk", "ironman", "spiderman", "captain america", Array(3)]

const all_new_heros = [...marvel_heros, ...dc_heros]; // Spreads elements of both arrays
console.log(all_new_heros); // ["thor", "hulk", "ironman", "spiderman", "captain america", "batman", "superman",]

const another_array = [1,2,3, [4,5,6], [7,8,[9,10]]];

const real_another_array = another_array.flat(Infinity); // Flattens the array by one level
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Creates a new array with the given elements