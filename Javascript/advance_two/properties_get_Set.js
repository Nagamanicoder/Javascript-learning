//function based class

function user(username, age){
    this.username = username,
    this.age = age 

    //getter and setter

    Object.defineProperty(this, 'username', {
        get: function(){
            return `${this._username}`
        },

        set: function(value){
            this._username = value 
        }
    })
}

const user2 = new user('mani', '21')
console.log(user2.age)