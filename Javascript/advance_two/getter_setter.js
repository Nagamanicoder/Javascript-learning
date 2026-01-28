class user {
    constructor(email, password){
        this.email = email 
        this.password = password
    }

    get password(){
        return `${this._password}` //access as the same variable given in the setter
    }

    set password(value){
        // this.password = value -> this makes the call stack exceed and both constructor and setter are setting the value
        //make a new variable
        this._password = value 
    }
}

const user1 = new user('mani@gmail.com', '123')
console.log(user1.password) //the password cannot be accessed as like function with parenthesis
//we are just accessing the properties 