//Nullish Coalescing Operator (??): null undefined

let val1;

val1 = 5 ?? 10 //val1 is assigned to first value
val1 = null ?? 12 //val1 is assigned to the value
val1 = undefined ?? 10 //val1 is assigned to the value
val1 = null ?? 12 ?? 23 //val1 is assigned to the first value

console.log(val1);

//Ternary operator 

condition ? true_statement : falseStatement
