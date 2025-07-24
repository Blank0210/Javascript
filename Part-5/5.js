const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// Summary of 4.js and 5.js:
// We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
// By using For of loop we can iterate maps also
// We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings.
// We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.
