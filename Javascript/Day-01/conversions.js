let score = true

// console.log(typeof score);
// console.log(typeof(score)); 

let valueInNumber = Number(score) //to convert in number datatype 

// console.log(valueInNumber); //score = "33abc" -> after conversion gives the Nan (Not a number) 
// console.log(typeof valueInNumber)// type as number
// console.log(valueInNumber);// score = null -> after conversion to number gives 0
// console.log(valueInNumber); //score = undefined -> after conversion gives NaN 
// console.log(valueInNumber); //score = true -> gives 1


//"33" -> 33
//"33abc" -> NaN - type-> number
//true -> 1 
//undefined -> 0 

//in boolean conversion 
// 1 => true; 0 => false
//"" => false
//"mani" => true

let booleanValue = true 

let stringBoolean = String(booleanValue);
// console.log(stringBoolean);
// console.log(typeof stringBoolean);

// Operations 

//basic operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/3);
// console.log(2%3);

//confusing operations
// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "3"); //33

// console.log(true); //this prints true
// console.log(+true); //this converts into the number -> prints 1 
// console.log(+""); //this prints 0

let counter = 100; 
// counter++;
// console.log(counter); //101 
++counter;
// console.log(counter); //101 

//Post increment and preincrement 

//post increment -> use value and then increment
let value = 100;
anotherValue = value++; //assigns the value first and then increments 
// anotherValue = value++;

console.log(value);
console.log(anotherValue);


//pre increment -> increment then use value 
let val = 200;
anotherVal = ++val; 

console.log(val);
console.log(anotherVal); 

//both will have same value















 

