const accountId = 1234;
var accountEmail = "nagamani@gmail.com";
let accountPassword = "123453";
accountCity = "Ballari";
let accountState;
console.log(accountId);

/*
To print every variable but not using the console.log() for every time
We will use the console.table([var1, var2,..]) 
this will print the tabular form of every variable
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);

//accountId = 234;

//console.log(accountId); // TypeError: Assignment to constant variable. Not Allowed 

accountEmail =  "mani@gmail.com";
accountPassword = "VN0126";
accountCity = "Koppal";

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
The variables declared using var and let have the same behavior of re-assigning the values
but the var is the first variable declaration keyword in javascript 
the var has major issues with the block scope {}
if any variable declared using var inside the block scope {} it can be accessed outside the block scope {}
but the let variable is block scoped it cannot be accessed outside the block scope {}
*/

/*
Prefer not use var to declare variables 
because of issue in block scope and functional scope
*/

console.log(accountState); //gives undefined 


"use strict"; //this makesall js code to treat as newere version of Js

//tcs39 - writes standards for javascript writers mainly for browsers - ecma script
//MDN is for documentation of javascript 
