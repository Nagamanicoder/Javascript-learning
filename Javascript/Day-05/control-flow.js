//control flow

//the logic control of the code executing. 
//any code doesnot have scope and conditional check that would execute without any restriction

// if(condition){
//     console.log("");
// }

// const temperature = 32
// if(temperature){
//     console.log("temperature is more!!");
// }else{
//     console.log("temperature is less");//when the same line is ept here, that have some boundary
// }
// console.log("temperature is less");//this would execute without any restriction

// const score = 212
// if(score>100){
//     const power = "skate"
//     console.log(`user power: ${power}`)
// }
// console.log(power); //is not accessible here

//implicit scope 
//only one statement can be kept
// const value = 100
// if(value<200) console.log("scope"); //implicit scope 

// if(true) console.log("scope2"), 
// console.log("second statement"); //implicit scope with two statements

//nested conditions

// const balance = 1000;

// if(balance<200){
//     console.log("less than 200");
// }else if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 1000");
// }else{
//     console.log("less than 1200");
    
// }


// const userLoggedIn = true
// const debitcard = true 

// if(userLoggedIn && debitcard){
//     console.log("Welcome user!!");
// }

//switch 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//if no breaks are there ,then it will doesnot check the condition and executes all.
//If break is omitted, execution will proceed to the next case clause, even to the default clause, 
// regardless of whether the value of that clause's expression matches.
//  This behavior is called "fall-through".

// const week = "Sun"
// switch (week) {
//     case "Sun":
//         console.log("First");
//         // break;
//     case "mon":
//         console.log("second");
//         // break;
//     case "tue":
//         console.log("third");
//         // break;

//     default:
//         console.log("invalid!!");
//         break;
// }


//checking the empty array and empty object

const emptyArray = []

if(emptyArray.length === 0){
    console.log("An empty array");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("An empty object");
}