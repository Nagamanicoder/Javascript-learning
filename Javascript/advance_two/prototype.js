//creating a property for the object i.e., main hierarchy
let myObj = {
    userName: "mani", 

    greeting: function(){
        console.log(`Welcome${username}`);
    }
}

//not by using prototype, but when a method or property is defined it should be accessed by array, string, function
//as all propagate from the object

Object.prototype.mani = function(){
    console.log('Mani method is for all objects');
}

// myObj.mani() // when this is called the property should do specific function 

//for arrays
const myArray = [1,2,3,4,5]
myArray.mani()

//for strings
const myName = 'Nagamani'
myName.mani()

//the mani() method can be accessed by all the propagated datastructures arrays, strings, functions


//injecting a method for the array only. then can it be accessed by the object

Array.prototype.heyMani = function(){
    console.log('Array prototype');
}

myArray.heyMani() // the arrays can use the method
// myObj.heyMani() //the object cannnot use the method


//protoypal inheritance

//old method
const user = {
    userName: 'mani'
}

const Teacher = {
    teacherName: "Nagamani",
    // __proto__: user //now teacher can access all the properties and methods of teacher
}

// Teacher.__proto__ = user //another method


//modern syntax
Object.setPrototypeOf(user, Teacher) //user prototye to the teacher


//A Challenge 
//to remove spaces and to return the true length of the string, without using the builtin functions
//this method to give to all strings

String.prototype.trueLength = function(){
    console.log(`${this}`); //this gives the string
    console.log(`The True length of ${this}, ${this.trim().length}`);
    
}
const name = 'mani   '
name.trueLength() //this method should return the true length of the string
