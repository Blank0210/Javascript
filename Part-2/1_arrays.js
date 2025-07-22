//ARRAYS

 const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Accessing elements
console.log(myArr[0]); // 0

//Constructing an array using the Array constructor
const newArray = new Array(11,12,13);


// Array Methods
myArr.push(10); // Adds 10 to the end of the array
myArr.push(45);
myArr.pop(); // Removes the last element (45)

myArr.unshift(-1); // Adds -1 to the beginning of the array
myArr.shift(); // Removes the first element (-1)

console.log(myArr.includes(9)); // true, checks if 9 is in the array
console.log(myArr.indexOf(3)); // 3, finds the index of 3

const newArray2 = myArr.join(); // Joins elements into a string
console.log(newArray2); // "0,1,2,3,4,5,6,7,8,9,10"

// Slicing and Splicing

const slicedArray = myArr.slice(2, 5); // Slices elements from index 2 to 4
console.log(slicedArray); // [2, 3, 4]

const splicedArray = myArr.splice(2, 3); // Removes 3 elements starting from index 2
console.log(splicedArray); // [2, 3, 4]
console.log(myArr); // [0, 1, 5, 6, 7, 8, 9, 10]