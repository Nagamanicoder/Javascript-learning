//interview question
// can constant MAth.PI can be changed to desired values. if yes why? and no why?

const math = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(math); 

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

//therfore, the Math.PI has non-writable, non- configurable and non-enumerable property. so it cannot be changed

const myObj = {
    mealname: 'chai', 
    price: '25',
    orderMeal: function(){
        console.log('Meal cannot ordered!');
    }
}

console.log(Object.getOwnPropertyDescriptor(myObj, 'mealname'))
//{ value: 'chai', writable: true, enumerable: true, configurable: true }

//if we want to change the permission for our defined object
Object.defineProperty(myObj, 'mealname', {
    writable: false,
    enumerable: true
})

//this would change the permission given to the key 'mealname' not for the whole object
//the object cannot be iterated like this
// for (let [key, value] of myObj) { 
//     console.log(`${key} | ${value}`);
// }

for (let [key, value] of Object.entries(myObj)) {
    if(typeof value !== 'function'){ //now the fucntion will not be printed
        console.log(`${key} | ${value}`);
    }
      //price | 25 -> the 'mealname' will not be printed as because the property are set as non-enumerable
}

// price | 25
// orderMeal | function(){
//         console.log('Meal cannot ordered!');
//     }

// the function shouldnot come