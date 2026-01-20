//Objects 

//Singleton is created when the object is created using the constructor 
// Object.create() //creates a object using constructor 

//Object literals 

// in objects the key is always a string without specifing it with quotes but the value can be of any datatype
const JSuser = {
    name : "Mani",
    "full name": "Nagamani"
}
//accessing the values of the object
//dot operator ->  this format is used only when the key is not specified with the quotes
//square braces -> this can be used in any of the situations
console.log(JSuser.name); 
console.log(JSuser["full name"]);
// console.log(JSuser.full name); //this way cannot be used so it need to be used in square braces

//using symbols as keys in the objects
const mykey = Symbol("key1") //creating the symbol key and the description is given in the square braces

let obj= {
    [mykey] : "mykey1" //using it as the key in object
    //mykey : "mykey1" //it is treated as string
}

//accessing the key value
console.log(obj[mykey]);


