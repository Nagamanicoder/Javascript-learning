const myObject = {
    js: "Javascript",
    cpp: "c++",
    html: "hyper text marku lang",
    mongo: "mongo DB"
}

//for in loop

// for (const key in object) {
//     console.log(key);
// }

for (const [key,value] in myObject) {    // array destructuring cannot be applied on the object
    // console.log(key, value);
}

for (const key in myObject) {
    // console.log(`the value for ${key} is ${myObject[key]}`);
    
}

