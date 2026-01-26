//for ecah loop for array over object

const mycoding = [
    {
        name: "Javascipt",
        extension: ".js"
    },
    {
        name: "Java",
        extension: ".java"
    },
    {
        name: "cpp",
        extension: ".cpp"
    },
]

//looping over array of objects

mycoding.forEach( (obj) => {
    console.log(obj.name);
    console.log(obj.extension);
} )