// Object literal ->  basic unit 
// Key points
    // No class, no new
    // Key–value pairs
    // Methods can be inside objects
    // Created at runtime

    //create an object

    const user = {
        //properties
        userName : "mani",
        loginCount : 8,
        signedIn: true, 

        //methods
        getUseretails : function(){
            console.log("Got user Details");
            console.log(`user name: ${this.userName}`);
            console.log(this);
            //{
                // userName: 'mani',
                // loginCount: 8,
                // signedIn: true,
                // getUseretails: [Function: getUseretails]
            // }
                
        }

    }

    // console.log(this); //{} -> global ocntext in node
    // console.log(user.userName);
    // console.log(user.getUseretails());
    
//constructor function

// the new keyword is the constructor function
// which allows to create multiple instances of one object  

function User(username, signedIn, loginCount){
    this.username = username
    this.signedIn = signedIn
    this.loginCount = loginCount

    //methods
    this.greeting = function(){
        console.log(`welcome: ${this.userName}`);
        
    }
    return this 
}

const userOne = User("nagamani", true, 12) // this will return all details of the instance of the function created

// const userOne = new User("venkatesh", false, 13) 
// console.log(userOne); //User { username: 'venkatesh', signedIn: false, loginCount: 13 } -> this gives cleaner values
// console.log(new User("mani", true, 12));

console.log(User.constructor);


//workflow of constructor fucntion

//step1: a new object is created
//step2: calling constructor function whenever the new keyword is used
//step3: all the information is binded into the this keyword
//step4: sent to user or returned