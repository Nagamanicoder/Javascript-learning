//Immediately Invoked Function Expressions

//The IIFE refers to the functions must be returned after the function definition
//use cases: when the application opened, the website must e connected to the database

//the main use of IIFE is to protect a function scope from the global scope

function Connection(){
    console.log("DB connected");
}
Connection(); //even after called just before definition, it will pollute with the global scope

//another way 
// function Connection(){
//     console.log("DB onnected");
// }() //this will give error 

//so 

(function Connection(){
    //named IIFE
    console.log("DB connected");
})();

//wrapping the function within parenthesis of ()
//like this ()(), first ()->to wrap, ()-> second to execute

//writing an arrow function of IIFE

(() => {
    console.log("DB connected Two");
})();

//most importantly the IIFE functions must be ended with the semicolons

//IIFE two types:
//1. named IIFE -> which has function name
//2.unnmaed IIFE -> which is a arrow function
//3.parameterized IIFE
((user) => {
    console.log(`${user}, DB Connected`);
})("mani"); 

//parameter passing in the second paranthesis, accepted in first paranthesis

//the IIFE another name of usage -> search it