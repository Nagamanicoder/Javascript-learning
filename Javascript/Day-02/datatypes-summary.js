// The data types in JavaScript can be broadly categorized into two types: Primitive and Non-Primitive (Reference) data types.
// the data types are categorized on the basis of the call by value and call by reference mechanism.
// and on the basis of they > are accessed and stored in the memory.

//Primitive data types:
// the datatypes when created with this are gives an as copy of the created datatype

//7 primitive datatypes: String, Number, Boolean, null(empty), undefined, Symbol, BigInt 

const score = 100;
let scoreValue = 100.3; //Both will be numbers, no separate datatype for integers and floating point numbers

const isLoggedIn = false //boolean

const name = "Mani" //string 

const tmp = null; //null -> empty value

let undefinedValue = undefined; //undefined -> value not assigned
let undefinedValue2; 

let id = Symbol('123') //if we want to create unique identifiers, use symbol and that return symbol datatype
let anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 45879154631546234873856n //n repersents the bigint




//Non primitive or refernce datatypes: 
//the refernce of the datatypes is given meaning that the datatypes are modified by user are modified in the memory

//Array, Objects, Functions 
//all non primitive datatypes return "object" as thier type 

const danceForms = ["Kathak", "Bharatanatyam", "HipHop"]; //array

let myObj = {
    "name2" : "mani", 
    "age" : 20, //object 
}

const myFunction = function () {
    console.log("My world");
    
}

console.log(typeof myFunction); 



// Datatypes -> Return type
//Primitive datatypes
// 1. Number -> Number
//2. String -> string
//3. Boolean -> Boolean
//4. null -> object
//5. undefined -> undefined
//6. symbol -> symbol


//Non primitive datatypes
//Datatype -> Return type
//1. Array -> object
//2. object -> object
//3. function -> function but it is a object function

//Javascript is a dynamic typed language  

// ******************************************************************************************
 
//stack Memory 
//stack memory stores the primitive datatypes

let myInstaName = "nagamani";
let anotherName = myInstaName; 

console.log(myInstaName);

anotherName = "kanmani";
console.log(anotherName);

//The primitive datatypes are stored in stack memory
//when we assign the value of one variable to another variable a copy of the value is created in the memory
//So when we change the value of anotherName it does not affect the myInstaName value

//Heap Memory
//Heap memory stores the non primitive datatypes

let myInfo = {
    email : "mani@gmail.com",
    number : 29484378
}

let myInfo2 = myInfo; //here the reference of the myInfo is assigned to info

myInfo2.number = 9999999;

console.log(myInfo);

//the variable myInfo and myInfo2 points to the same memory location in the heap memory
//So when we change the value of myInfo2 it also affects the myInfo value

