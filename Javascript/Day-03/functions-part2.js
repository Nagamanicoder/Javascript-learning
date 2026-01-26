//this  -> talks about the current context(values within a scope) of an object

const myObj = {
    name : "Mani",
    website : "Inscribe",
    message : function(){
        console.log(`${this.name} , welcome to my website!!`); 
        console.log(this); 
        //only specifing this without any object value, prints all objects values  of that instance of call
        
    }
}

myObj.message()
myObj.name = "venky" //this line changes the name of the user 
myObj.message() //with this keyword, current value is accessed

console.log(this); //this prints {} -> empty object 
//As no global object is not there 

//in windows -> the javascript browser was there 
//console.log(this) -> used then prints the current window object
//as because the javascript environment was in the browser

//declaring function
//method1
function me(){
    let name = "Nagamani"
    console.log(this.name); //gives undefined -> because this cannot be used in a function
    
}
// me()

//method2 

const secondFun = function() {
    console.log(this);
}

// secondFun();

//method3 : arrow functions

const arrow = () => {
    let name = "mani"
    console.log(this.name); //-> this gives empty {}    
}

//arrow functions -> implicit and explicit return statement

() => {} // -> this is a simple arrow function

//explicty specifying the return statement
const addNum = (num1, num2) => {
    return num1 + num2
}

// console.log(addNum(2,4));

//implicit return statement is specified
//when one line statement is there

const addNumers = (num1, num2) => (num1 + num2)
console.log(addNumers(9,5)); 

//returning objects implicitly
const returnObj = () => ({name : "mani"}) //the object must specified with {}
console.log(returnObj());

//implicit return statement
//with {} -> return statement must specified
//without {} -> return statement is implicit 
//for object returning -> the object must specified with the {}

//this in arrow functions doesnot points to the global this
//other methods of functions used with this will point to the global this


