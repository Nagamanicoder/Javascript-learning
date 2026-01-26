 //Numbers

const number = 45;
// console.log(number);
// const number2 = new Number(45);

// console.log(number2);
 
//there are methods of 7-8 available for numbers which can be accessed using __proto__
// console.log(number2.__proto__);

//******************* Maths ********************* 

// console.log(Math.random()); //will give in between 0 and 1

// console.log(Math.random()*10); //will produce numbers between 0 to 9

// console.log(Math.floor(Math.random()*10)+1);

let min = 10;
let max = 20;

// console.log(Math.floor(Math.random()*(max + 1)) + min);

// console.log(Math.random()*(max + 1)); //gives decimal values between 10 to 20

// console.log((Math.floor(Math.random()*(max-min + 1)) + min)); 

//max-min + 1 -> this handles how many numbers are there between min and max including both 
//min -> this shifts the range from starting at 0 to starting at min value


let minVal = 8;
let maxVal = 20;

// console.log(Math.floor(Math.random()*(maxVal-minVal+1))+minVal); 

let minValue = 24
let maxValue = 30

console.log(Math.floor(Math.random()*(maxValue-minValue+1))+minValue);

//for deduction of the steps see chatgpt information
//https://chatgpt.com/share/6971b078-3798-8002-89fd-dabe5447888e




