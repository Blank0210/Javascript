const promiseOne = new Promise(function(resolve, reject){
    // Do a async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve(); // Resolves the promise
    }, 1000)
});

promiseOne.then(function() {
    console.log("Promise consumed!")
})

// The above code is simplified and can be written as the below code

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task-2 is complete!");
        resolve();
    }, 1000)
}).then(function() {
    console.log("Promise-2 consumed!")
})

// promise 3

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "John", age: 30});
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
})

// promise-4

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true; // Simulating an error
        if(!error) {
            resolve({username: "Jane", age: 25});
        } else {
            reject("Error: Something went wrong!");
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username; // Returning username
}).then( (username) => {
    console.log(username);
}).catch((error) => {
    console.error(error); // Handling error
}).finally(() => console.log("The promoise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')  
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
