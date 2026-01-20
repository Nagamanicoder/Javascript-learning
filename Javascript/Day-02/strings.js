//string interpolatioin

let name = "Nagamani";

// console.log(name + " is beautiful!!");

// console.log(`${name} is proficient in coding`);

//another way of declaring strings

let myName = new String('Kanamani');

// the return type of strings is string but it is stored as object, 
// the strings are stored as key value pairs of key as the index of the char and value is the char

// console.log(myName[0]);

// console.log(myName.__proto__); //gives all the methods available for string datatype 
//Now in console it gives empty object because the __proto__ is not enumerable
//non enumerable is cannot be accessed in loops

// console.log(myName.toUpperCase());
let lenOfString = myName.length;

// console.log(lenOfString);

//substring method

const newstring = myName.substring(0,4);

// console.log(newstring);

//slice method -> slice can take negative indices
let favGod = "Venkateshwara";
let length = favGod.length;

// console.log(length);
const slicedstring = favGod.slice(-7);

console.log(slicedstring);

//trim method -> removes spaces from starting and ending of the string
let stringWithSpaces = "     Hello World     ";
console.log(stringWithSpaces);

console.log(stringWithSpaces.trim());


//replace method -> replaces the first occurrence of the substring

let sentence = "I want to be your soul mate!";

console.log(sentence.replace("soul mate", "best friend"));