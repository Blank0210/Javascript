class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }
    
    set password(value) {
        this._password = value;
    }
}

const user1 = new User('Adhvaidh','asdfghv');
console.log(user1.password);