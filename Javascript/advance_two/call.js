//whenever function calls another function within the function, 
// the execution context of the called function will be flushed out
//and to take the refernce or the return values from the called function
//call is used by sending the called function execution context i,e. this

function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUSer(username, email, password){
    setUsername.call(this, username) // function call happens but the return values are not able to take 
                          //as the execution context of the called function is flushed out
                          //this is sent as the current execution context of the calling function
                          //call method will take the values from the called function

    this.email = email 
    this.password = password
}

const venky = new createUSer("venky", "venky@gmail.com", "123")
console.log(venky);
