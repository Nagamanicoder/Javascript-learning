//all arrays, strings, function are objects itself
//all have properties of objects
//based on the usage the object properties are used
//at the end object points to the null

//defining a normal function
function addby5(num){
    return num+5;
}

console.log(addby5(5));
console.log(addby5.mani = 2); //user defined property can also be defined
console.log(addby5.prototype); //will give {} -> contains all the properties and methods of a function which itself is a object 


//defining a fucntion as object and user defined prototype for the object defined
//function as object
function userDefinedObject(dishName, price){
    this.dishName = dishName
    this.price = price
}

//user defined prototypes for the function
userDefinedObject.prototype.increasePrice = function(){
    if(this.dishName === 'chapati&Bendi'){
        this.price += 12
        return this.price
    }
}

userDefinedObject.prototype.greeting = function() {
    console.log(`Welcome to Mani's Kitchen`);
    
}

//defining instances or objects
const dish1 = new userDefinedObject('chapati&Bendi', 20)
const dish2 = new userDefinedObject('palav', 34)

const price = dish1.increasePrice()
dish2.increasePrice()
console.log(price);
