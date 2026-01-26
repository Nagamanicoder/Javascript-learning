//the javascript is dynamically typed language which means the datatype is defined at the runtime

//************ Execution context **********************

//the execution of the code is explained here

//the things that are created when the code is written are: 
//1.global execution context
//2. functional execution context
//3. Eval EC -> in mongoose documentation

//1. global execution context -> the this keyword refers to this global EC
//for browser and other node,.. have thier own global context
//for windows -> this points to the window object

//the phases of the execution of code in javascript
//1. memory creation phase
//2. Execution phase

//for any code like

//an example:
let val1 = 2
let val2 = 3
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,4)

//for this code the steps of execution is done below

//-> first creation of global context -> the global context is assigned to the this keyword
//->second creation phase or memory creation phase
//-> third, the execution phase

