// Dates

let myDate = new Date()
// console.log(myDate.toString());
// Output example: Sun Jul 20 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());
// Output example: Sun Jul 20 2025
// console.log(myDate.toLocaleString());
// Output example: 7/20/2025, 12:00:00 AM
// console.log(typeof myDate);
// Output: object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
// Output: 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// Output example: 1752979200000
// console.log(myCreatedDate.getTime());
// Output: 1673654400000
// console.log(Math.floor(Date.now()/1000));
// Output example: 1752979200

let newDate = new Date()
console.log(newDate);
// Output example: Sun Jul 20 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(newDate.getMonth() + 1);
// Output: 7
console.log(newDate.getDay());
// Output: 0 (Sunday)

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
})