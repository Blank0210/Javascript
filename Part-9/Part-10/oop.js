const user = {
    username: "Adhvaidh",
    loginCount : 0,
    signedIn: true,
    
    getUserDetails: function() {
        console.log(this);
    }
}

// console.log(user);
// console.log(user.username);
// console.log(this)

function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function() {
        console.log(`Hello ${this.username}, you have logged in ${this.loginCount} times.`);
    }
    return this;
}

const userOne = new User("Adhvaidh", 12, true);
const userTwo = new User("John", 5, false);
console.log(userOne.constructor);
console.log(userTwo);