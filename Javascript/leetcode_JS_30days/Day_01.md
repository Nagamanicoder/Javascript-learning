### Write a function createHelloWorld. It should return a new function that always returns "Hello World".

```
var createHelloWorld = function() {
    const greeting = "Hello World";
    return function(...args) {
        return greeting
    }
};
```

```
In this question, I have learnt about the 
function currying concept
here, the arguments are passed but not used and 
the function currying means collecting all the inputs and performing some operation on it
```