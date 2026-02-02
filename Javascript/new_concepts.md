## Currying Function in JavaScript

```
Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps.
 It transforms a function with multiple arguments into a series of functions, each taking a single argument.

> It converts a function with multiple parameters into a sequence of functions.

> Each function takes a single argument and returns another function until all arguments are received.

> Helps in functional programming by enabling function reusability and composition.
```

## How Currying Works in JavaScript?

```
1. Creating the First Function: The first function takes the first argument and gives back a new function to take the next one.
2. Returning a New Function: The returned function takes the next argument and keeps going until all the arguments are given.
3. Returning the Result: Once all the arguments are provided, the final result is calculated and returned.
```

## When to Use Currying in JavaScript?
```
In JavaScript, currying function is used in the following cases:

1. Partial Application: In the partial application we set some arguments in advance in the function and call it later with the remaining arguments.
2. Higher-Order Functions: When one function takes the other functions as arguments (eg: map, filter, reduce) in that case we can use the currying function to manage the arguments more effectively.
3. Functional Programming: Where functions are treated as important and focus is on not changing data and combining functions in those cases currying works perfectly.
```

```
when the curried function called with empty aguments then it will return the function itself
```