//previously classes were defined by the function and objects
//Js has class keyword for it

class user {
    constructor (username, password, email) {
        this.username = username
        this.password =  password //this.encryptPassword (password)
        this.email = email
    }

    encryptPassword () {                //encryptPassword (password) {
        return `${this.password}sjkdfh`  // return `${password}sjkdfh`
                                        //}
    }
}

const user1 = new user('nagamani', '123', 'me@gmail.com')
console.log(user1.encryptPassword());


//behind the scene -> using the function to implement the class
//above class implementation

function User(username, email, password){
    this.username = username
        this.password =  password 
        this.email = email
}

User.prototype.encryptPassword = function () {
    return `${this.password}sjkdfh`;
}

const func_user = new User('mani', 'mani@gmail.com', '123')
console.log(func_user);
