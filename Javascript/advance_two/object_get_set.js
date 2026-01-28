const user = {
    username: 'mani@gmail.com',
    email: 'abc',

    get(){
        return `${this._email}`
    },
    set(value){
        this._email = value 
    }
}

//factroy function in object -> using the constructor function 
const user2 = Object.create(user)
console.log(user2.email);
