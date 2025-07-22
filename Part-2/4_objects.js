// Creating an object using constructor syntax (commented out)
// const tinderUser = new Object()
const tinderUser = {}
// Creating an object using literal syntax

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// Adding properties to the tinderUser object

// console.log(tinderUser);
// Logging the tinderUser object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// Nested object structure for regularUser

// console.log(regularUser.fullname.userfullname.firstname);
// Accessing nested properties

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// Simple objects with numeric keys

// const obj3 = { obj1, obj2 }
// This would nest obj1 and obj2 as properties inside obj3
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// Merges all properties into a new object

const obj3 = {...obj1, ...obj2}
// Spread operator to merge obj1 and obj2 into obj3
// console.log(obj3);
// Logging merged object


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// Array of user objects

users[1].email
// Accessing the email of the second user
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// Get all keys of tinderUser as an array
// console.log(Object.values(tinderUser));
// Get all values of tinderUser as an array
// console.log(Object.entries(tinderUser));
// Get all key-value pairs as an array of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Check if tinderUser has a property 'isLoggedIn'

// ######## DE-STRUCTURE #######

// Object representing a course
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Accessing property directly
// course.courseInstructor

// Object destructuring: renaming courseInstructor to instructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);

// Would be undefined, as we renamed it to instructor
console.log(instructor);

// Logging the value of instructor

// {
//     "name": "adhvaidh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// Example of a JSON object

[
    {},
    {},
    {}
]
// Example of an array of objects