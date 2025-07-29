class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abcsdf`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const user1 = new User('john_doe', 'john@gmail.com', '123abc')

console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUsername());


// behind the scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());