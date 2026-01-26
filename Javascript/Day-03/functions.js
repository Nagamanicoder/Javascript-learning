//functions
//used to to do a package of code to it reusable

//function definition
function printHello(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

printHello //this refernce of function
// printHello() //this is execution of function

//parameters and arguments

function addTwoNumbers(number1, number2){ //the values here are the arguments
    console.log(number1 + number2);
}

addTwoNumbers() 
//if no arguments are passed then the value will be NaN because no specific datatype values are sent here

addTwoNumbers(3,4) //the values passed here are arguments

addTwoNumbers("3",9) //the string addition (may be)

const result = addTwoNumbers(5,6)
console.log(result); //will get undefined because the log statement is there

function addNumbers(num1, num2){
    let result = num1 + num2
    return result
}

const output = addNumbers(4,0)
console.log(output);

//different methods to send arguments
//method1: default aarguments if no arguments are sent

function defaultfunction(name = "user"){
    console.log(`${name} used this function`);
}
defaultfunction("mani")

//rest operator
//in real world application arguments to a function which is not specified the number of arguments
//we will use rest operator

function prices(num1){
    return num1  
}

console.log(prices(10)) // we know the number of arguments is one

function prices(...num1){  //based on the usage of three dots, it is called as spread operator and rest operator
    return num1
}

console.log(prices(200,322,332,123));
//this will make an array of all passed values 
//all array values then can be used for any operation

//passing objects as parameters

const friend  = {
    friend1:{
        name :"venky",
        when: "degree",
    },
    friend2:{
        name: "arpitha",
        when: "degree"
    }
}

function printFriends(anyobject){ //object is passed
    console.log(`${friend.friend1.name} is a ${friend.friend1.when} friend`);
}

printFriends(friend) 

//problems in dealing with objects as parameters 
//nested object
//object keys are not same as they are in the object when used in the function or when passed

//passing arrays to function

const myArray = [1,2,3,4,5]

function arrayOpertion(getArray){
    return getArray[2]
}

console.log(arrayOpertion(myArray));

//scopes 
//there are two level of scopes
//1. Block scope -> limited within the braces
//2. Global scope -> outside of block

//var is not limited to any block level
//example



//a block 
if(true){
    let a = 2
    const b = 3
    var c = 20 
}
// console.log(a); // a will not be printed
// console.log(b); // b will not be printed
console.log(c); // c will be printed,even if it is in the block

//***************************** hoisting - an interesting concept ******************************

//Hoisting is a JavaScript mechanism where the interpreter appears to move declarations 
// to the top of their containing scope (global or function) before the code is executed
//different types of declaration

//method1 : Normal declaration 

//function call
addOne()

function addOne(num){
    return num+1
}
//function call
addOne()

//method2 : expressions 

//function call 
// addTwo() -> ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num+2
}
//function call
addTwo()

