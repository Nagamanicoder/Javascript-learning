// As for each loop doesnot return anything
// will use the filter for this

const numbers = [1,2,3,4,5,6,7,8,9,10]
// const filtered_numbers = numbers.filter( (val) =>  (val>4) ) //implicit return
const filtered_numbers = numbers.filter( (val) =>  {
    return val>4 //explicit return
} )
// console.log(filtered_numbers);

//filter work can be done using the for each loop
const newNums = []
numbers.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
} )
// console.log(newNums);

//filtering in real world -> applying filters in a webapp 

const Books = [
    {name: "book One", year: "2021", genre: "fiction"},
    {name: "book two", year: "2022", genre: "fiction"},
    {name: "book three", year: "2023", genre: "fiction"},
    {name: "book four", year: "2024", genre: "fiction"},
]

const filtered_books = Books.filter( (book) => book.year === "2021" )
console.log(filtered_books);
