//arrays - read MDN docs for more basic information 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//most important note is: 
//> in arrays, the array copy operations happen that create shallow copies of the elements
// Shallow copy means that the refernce of the array is created meaning the original array is affected 
//Deep copy means the array the is created a copoy of the original array and the original array is not affected

//Creating an array

let colors = ['red', 'green', 'blue'];

let chakraAsanas = new Array('mooladhara', 'swadisthana', 'manipura', 'anahata', 'vishuddha', 'ajna', 'sahasrara');

//Accessing elements of an array

// console.log(chakraAsanas[0]); //accessible using index starting from 0

//Array property -> length 
// console.log(chakraAsanas.length);

//Array methods 

colors.push('yellow')

colors.pop() // pop method have no arguments, it removes the last element of the array

colors.unshift('purple') //adds an element at the start of the array, time consuming operation 

colors.shift() //removes the first element of the array
// console.log(colors);

// console.log(colors.includes('blue')); //boolean return type 

// console.log(colors.indexOf(90)); //returns -1 if it is not found

const newArr = chakraAsanas.join()
// console.log(newArr);
// console.log(typeof newArr); //concatenates every value of the array and returns a string 
//after using join method the array is converted to string


//Slice and splice

let myArr = [0,1,2,3,4,5,6]
// console.log("orig Arr: " , myArr);

myArr.slice(0,4) //doesnot includes last index specifed here 
// console.log(myArr.slice(0,4)); // 0,1,2,3 ->4 elements output -> [ 0, 1, 2, 3 ]

// console.log("after slice: ", myArr);

// console.log(myArr.splice(0,3)) //output -> [ 0, 1, 2 ]
//in splice the first parameter is start index and another parameter is deletecount
// console.log("after splice: ", myArr); //output -> [ 3, 4, 5, 6 ]

//The splice changes the original array and returns the deleted elements as an array


//if an array is pushed as an argument to another array, then a shallow copy is created

// colors.push(chakraAsanas)
// console.log(colors); //array in array comes 

//to access the elements of the inner array
// console.log(colors[3][1]); 

//to concatenate the wo arrays -> use concat method
//concat method concatenates two arrays and returns new array without changing the original arrays

let arr1 = [1,2,3,3,4,5]
let arr2 = [12,34,23,34]

let result = arr1.concat(arr2)
// console.log(result);

//spread operator also does the same work as the concat

//the spread operator is ... 
//the spread operator spreads the elements
//concat more than two arrays

let newArr2 = [...arr1, ...arr2]
// console.log(newArr2);

//rare case 
//when the array contains the subarrays

let anotherArray = [1,2,2,[3,4,5,5,[3,4,5,6,[2,3,4]]]]

let usable_array = anotherArray.flat(Infinity)
console.log(usable_array);


//when the time of webscrapping happens, the return values will be another datatype like objects, array 

console.log(Array.isArray([1,2,3,4]));

console.log(Array.from("Mani"));//makes a new array

console.log(Array.of({name: "Mani"}));// makes an array of conatining the object 
//with the from it will not make the new array

//Interesting case

console.log(Array.from({name:"mani"}));

let score1 = 12
let score2 = 13
let score3 = 14;

console.log(Array.of(score1, score2, score3));




