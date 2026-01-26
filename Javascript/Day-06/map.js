//maps as loops 

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newNums = mynums.map( (num) => num*2 )
// console.log(newNums);

//using for each loop
const nums_filtered = []
mynums.forEach( (val)=>{
    nums_filtered.push(val*2)
} )
// console.log(nums_filtered);

//*************************************** Chaining of methods **********************************************

const numbers = [1,2,3,2,1,4,5,4]

const newNumbers = numbers.map( (num) => num*2)
                    .map( (val) => val+2 )

console.log(newNumbers);
