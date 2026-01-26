// Array specific loops

//for-of -> gives the values of the array
const array = [1,2,3,4,5]
for (const num of array) {
    // console.log(num);
}

//for-in loop -> gives the keys of the values
const lang = ["Java", "CPP", "JS", "html", "CSS"]
for (const ele in lang) {
    // console.log(lang[ele]);
}

//map

// map are used to store key value pairs and for tis uniqueness of storing the values

//creating a map 
const map = new Map()
map.set("V", "Venkatesh")
map.set("N", "Nagamani")
map.set("T", "Thirumala")
map.set("C", "Chandrika")
map.set("P", "Pavani")

// console.log(map);


for (const [key, value] of map) {
    // console.log(key);
}

for (const key in map) {
    console.log(key);
    
}
//objects are not itertable using for of loop
const myObj = {"B":"Baasavaraj", "L":"Lokeshwari", "C": "Chandrika", "N": "Nagamani", "T":"Thirumala", "P": "Pavani"}

// for (const [key, value] of myObj) {
//     console.log(key, " ", value);
// }

//***************************************** For Each Loop (mixup of for in and for of loop) ******************************** */
//for each loop
//for each loop doesnot return anything -> so undefined

const numbers = [1,2,3,4,5,6]

// numbers.forEach( function (val) {
//     console.log(val);
// })

//arrow functions in for each loop
numbers.forEach( (val) => {
    // console.log(val);
    
} )

//foreach loop with function refernce
//callback function defined outside of the for each loop
function printHello(val){
    // console.log(val);
    
}
numbers.forEach(printHello)

//for ecah loop takes three arguments -> index, value, array 

numbers.forEach( (index, val) => {
    console.log(val, index);
    
})