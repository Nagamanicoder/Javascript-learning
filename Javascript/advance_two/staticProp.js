class user{
    constructor (username){
        this.username = username
    }

    static creatId (){ //when we donnot want to give access to all the objects created for this class, use static
        return `123`
    }

    logMe () {
        console.log('Logged In!');
        
    }
}

const mani = new user('mani')
// console.log(mani.creatId()); //mani.creatId is not a function , now cannot be accessed 

class company extends user{
    constructor (username){
        super(username)
    }
}

const companyUser = new company('companyMan')
companyUser.logMe() //this function can be accessed by the child
companyUser.creatId() //the child classes cannot access the static methods