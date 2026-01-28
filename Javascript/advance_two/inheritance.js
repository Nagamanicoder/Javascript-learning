//without the call keyword, calling another function that takes care of the current context

class user {
    constructor (username){
        this.username = username
    }
}

class Teacher extends user{
    constructor (username, password, email){
        super(username) //this replaces the functionality of call keyword
        this.password = password
        this.email = email
    }

    addCourse(){
        console.log( `A new course was added by ${this.username}`);
        
    }
}

const teacher1 = new Teacher('mani', 'mani@gmail.com', '123')
teacher1.addCourse()


console.log( teacher1 === Teacher); //false -> the teacher1 is an instance of the Teacher class
console.log(teacher1 === user); //false ->as inherited form the user class will it be same no!

//to check the objects as which class instance
console.log(teacher1 instanceof Teacher); //true because it is the instance of the teacher


