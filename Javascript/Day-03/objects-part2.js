//Singleton -> singleton are the classes that give a single object throughout where it is created

const incribeUser = new Object(); // this is a singletoon object

const inscribeUser = {} //this is a nonsingleton object

//adding key-value pairs into it
inscribeUser.id = "123adc"
inscribeUser.name = "mani"
inscribeUser.isloggedin = true

// console.log(inscribeUser);

const regularUser = {
    id : "123ad",
    fullName : {
        userFullname:{
            firstName: "Edapanur",
            lastName: "Nagamani"
        }
    }
}

//accessing nested objects
// console.log(regularUser.fullName.userFullname.firstName);

//for accessing safer nested objects, there is object chaining that uses '?' mark 

//object concatenation
const obj1 = {1:"a", 2:"b", 3:"c", 4:"d"}
const obj2 = {3: "c", 4: "d", 5:"f"}

const obj3 = {obj1, obj2} 
/*{
  obj1: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' },
  obj2: { '3': 'c', '4': 'd', '5': 'f' }
}*/

//without making object into object ->assign method
//assign method to concatenate the objects

const obj4 = Object.assign({}, obj1,obj2)

//using spread operator (...) can also combine the objects
const obj5 = {...obj1, ...obj2}

// console.log(obj5); 


//when the website sends data it will be in the array of objects
//accessing array of objects

const user = [
    {
        "name": "mani"
    },
    
    {
        "name": "mani"
    },
    
    {
        "name": "mani"
    }
]

console.log(user[1].name)

//storing keys of value
const keysOfObject = Object.keys(obj1)
console.log(keysOfObject); //this gives an arraythat stores all the keys of an object

//stroing values of an object
const valuesOfOject = Object.values(obj1)
console.log(valuesOfOject); //this gives an array of objects

//the entries of an object 
const entriesOfObject = Object.entries(obj1)
console.log(entriesOfObject); //[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

//to check if an object contains a propety or not
console.log(obj1.hasOwnProperty('1')) 
//this says whether that key is present or not in an object and returns boolean value

//object destructring -> {} = object name

const course = {
    course: "Dance",
    Price: "499",
    courseInstructor: "Nagamani"
}

//this way will access the object keys but it will be long
console.log(course.courseInstructor);
//for easier access the object destructuring is used
const {courseInstructor} = course
console.log(courseInstructor); //directly the key is used without the object name

//and also can give the name for the destructured key 
const {courseInstructor : instructor} = course 
console.log(instructor);





