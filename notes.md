## Javscript notes

#### JavaScript is a prototype-based, garbage-collected, dynamic language, supporting multiple paradigms such as imperative, functional, and object-oriented.

#### Prototype-based programming 
##### is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object.

#### objects in JavaScript inherit properties and methods directly from other objects through a mechanism called the prototype chain. 

### Basics 

##### > JavaScript is case-sensitive and uses the Unicode character set.

#### // a one line comment

#### /* this is a longer,
####  * multi-line comment
####  */

# Declarations
### JavaScript has three kinds of variable declarations.

### var
#### Declares a variable, optionally initializing it to a value.

### let
#### Declares a block-scoped, local variable, optionally initializing it to a value.

### const
#### Declares a block-scoped, read-only named constant.

# Variable hoisting

#### var-declared variables are hoisted, meaning you can refer to the variable anywhere in its scope, even if its declaration isn't reached yet. 

````
Javascript

    console.log(x === undefined); // true
    var x = 3;

    (function () {
    console.log(x); // undefined
    var x = "local value";
    })();

`````


# Data types
## The latest ECMAScript standard defines eight data types:

### Seven data types that are primitives:

#### Boolean: true and false.
#### null: A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)

#### undefined. A top-level property whose value is not defined.
Number. An integer or floating point number. For example: 42 or 3.14159.
#### BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
#### String. A sequence of characters that represent a text value. For example: "Howdy".
#### Symbol. A data type whose instances are unique and immutable.
#### Object

# Data type conversion
#### JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

# Converting strings to numbers
#### In the case that a value representing a number is in memory as a string, there are methods for conversion.

### parseInt()
### parseFloat()
### Number()

# Falsy values
## The following values evaluate to false (also known as Falsy values):

### false
### undefined
### null
### 0
### NaN
### the empty string ("")

# Conditional statements
## if...else statement

```
Javascript

if (condition) {
  statement1;
} else {
  statement2;
}

```

#### If condition evaluates to true, statement1 is executed. Otherwise, statement2 is executed. statement1 and statement2 can be any statement, including further nested if statements.

# switch statement

### A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement.

```
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
```

# Loops and iteration

### The statements for loops provided in JavaScript are:

### for statement
### do...while statement
### while statement
### labeled statement
### break statement
### continue statement
### for...in statement
### for...of statement

# for statement

```
for (initialization; condition; afterthought)
  statement
```

### When a for loop executes, the following occurs:

#### 1 The initializing expression initialization, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
#### 2 The condition expression is evaluated. If the value of condition is true, the loop statements execute. Otherwise, the for loop terminates. (If the condition expression is omitted entirely, the condition is assumed to be true.)
#### 3 The statement executes. To execute multiple statements, use a block statement ({ }) to group those statements.
#### 4 If present, the update expression afterthought is executed.
#### 5 Control returns to Step 2.

# do...while statement

```
do
  statement
while (condition);
```
#### statement is always executed once before the condition is checked. 
#### If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while.

# while statement

```
while (condition)
  statement
```

#### The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.

# break statement

#### When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
#### When you use break with a label, it terminates the specified labeled statement.

```
break;
break label;
```

# continue statement

#### When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely.
####  In a while loop, it jumps back to the condition. 
#### In a for loop, it jumps to the increment-expression.

# for...in statement

#### The for...in statement iterates a specified variable over all the enumerable properties of an object.
```
for (variable in object)
  statement
```

# for...of statement
####  The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

```
for (variable of iterable)
  statement
```

# Functions

## Defining functions
```
function square(number) {
  return number * number;
}
```

# Function expressions

```
const square = function (number) {
  return number * number;
};
```

# Function hoisting

```
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

#### This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope

#### Function hoisting only works with function declarations — not with function expressions. 

# Immediately Invoked Function Expressions (IIFE)

#### An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. It is also known as a self-executing anonymous function

```
// standard IIFE
(function () {
  // statements…
})();

// arrow function variant
(() => {
  // statements…
})();

// async IIFE
(async () => {
  // statements…
})();

(function expression)(or calling, or arguments can be sent);
semicolon is neccesary
```

### It contains two major parts:

#### A function expression. This usually needs to be enclosed in parentheses in order to be parsed correctly.
#### Immediately calling the function expression. Arguments may be provided, though IIFEs without arguments are more common.

#### Use cases of IIFEs include:

### Avoiding polluting the global namespace by creating a new scope.
### Creating a new async context to use await in a non-async context.
### Computing values with complex logic, such as using multiple statements as a single expression.

# Function parameters
### There are two special kinds of parameter syntax: 
#### default parameters 
#### rest parameters.

## default parameters 
```
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

## rest parameters
#### The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

```
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

# Arrow functions

### An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

#### Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
#### Arrow functions cannot be used as constructors. 
#### Calling them with new throws a TypeError. 
#### They also don't have access to the new.target keyword.

```
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```

```
const func = () => ({ foo: 1 });
```
# Cannot be used as methods
Arrow function expressions should only be used for non-method functions because they do not have their own this. Let's see what happens when we try to use them as methods:
```
"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // logs undefined, Window { /* … */ } (or the global object)
obj.c(); // logs 10, Object { /* … */ }
```

# Date object
```
const dateObjectName = new Date([parameters]);
```
#### Calling Date without the new keyword returns a string representing the current date and time.

#### The parameters in the preceding syntax can be any of the following:

#### Nothing: creates today's date and time. For example, today = new Date();.
#### A string representing a date, in many different forms. The exact forms supported differ among engines, but the following form is always supported: YYYY-MM-DDTHH:mm:ss.sssZ. For example, xmas95 = new Date("1995-12-25"). 
#### If you omit hours, minutes, or seconds, the value will be set to zero.
#### A set of integer values for year, month, and day. For example, xmas95 = new Date(1995, 11, 25).
A set of integer values for year, month, day, hour, minute, and seconds. For example, xmas95 = new Date(1995, 11, 25, 9, 30, 0);

```
function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
```

# Array
```
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
```

# Array methods
#### The join() method joins all elements of an array into a string.
```
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list is "Wind - Rain - Fire"
```

#### The concat() method joins two or more arrays and returns a new array.
```
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list is "Wind - Rain - Fire"
```

#### The push() method adds one or more elements to the end of an array and returns the resulting length of the array.
```
const myArray = ["1", "2"];
myArray.push("3"); // myArray is now ["1", "2", "3"]
```
#### The pop() method removes the last element from an array and returns that element.
```
const myArray = ["1", "2", "3"];
const last = myArray.pop();
// myArray is now ["1", "2"], last = "3"
```

#### The shift() method removes the first element from an array and returns that element.
```
const myArray = ["1", "2", "3"];
const first = myArray.shift();
// myArray is now ["2", "3"], first is "1"
```

#### The unshift() method adds one or more elements to the front of an array and returns the new length of the array.

```
const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray becomes ["4", "5", "1", "2", "3"]
```

#### The slice() method extracts a section of an array and returns a new array.
```
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// starts at index 1 and extracts all elements
// until index 3
```

#### The at() method returns the element at the specified index in the array, or undefined if the index is out of range. 
```
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", the second-last element of myArray
```

#### The splice() method removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.
```
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
```

#### The forEach() method executes callback on every array item and returns undefined.
```
const a = ["a", "b", "c"];
a.forEach((element) => {
  console.log(element);
});
// Logs:
// a
// b
// c
```

#### The map() method returns a new array of the return value from executing callback on every array item.
```
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

#### The flatMap() method runs map() followed by a flat() of depth 1.
```
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

#### The filter() method returns a new array containing the items for which callback returned true.

```
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
```

#### The reduce() method applies callback(accumulator, currentValue, currentIndex, array) for each value in the array for the purpose of reducing the list of items down to a single value. The reduce function returns the final value returned by callback function.

If initialValue is specified, then callback is called with initialValue as the first parameter value and the value of the first item in the array as the second parameter value.

If initialValue is not specified, then callback's first two parameter values will be the first and second elements of the array. On every subsequent call, the first parameter's value will be whatever callback returned on the previous call, and the second parameter's value will be the next value in the array.

If callback needs access to the index of the item being processed, or access to the entire array, they are available as optional parameters.

```
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```
# Map object
A Map object is a key/value map that can iterate its elements in insertion order.

```
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

# Working with objects
```
const obj = {
  property1: value1, // property name may be an identifier
  2: value2, // or a number
  "property n": value3, // or a string
};
```

#### Using a constructor function
Alternatively, you can create an object with these two steps:

Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
Create an instance of the object with new.

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```
```
const myCar = new Car("Eagle", "Talon TSi", 1993);
```
```
const animal = Object.create(animalProto);
```

# Accessing properties

```
// Dot notation
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// Bracket notation
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

# Enumerating properties

#### There are three native ways to list/traverse object properties:

for...in loops -> This method traverses all of the enumerable string properties of an object as well as its prototype chain.

Object.keys() -> This method returns an array with only the enumerable own string property names ("keys") in the object myObj, but not those in the prototype chain.

Object.getOwnPropertyNames() -> This method returns an array containing all the own string property names in the object myObj, regardless of if they are enumerable or not.

# Defining getters and setters

```
const myObj = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(myObj.a); // 7
console.log(myObj.b); // 8, returned from the get b() method
myObj.c = 50; // Calls the set c(x) method
console.log(myObj.a); // 25
```

# classes

#### Classes create objects through the new operator.
Each object has some properties (data or method) added by the class.
The class stores some properties (data or method) itself, which are usually used to interact with instances.
These correspond to the three key features of classes:

Constructor;
Instance methods and instance fields;
Static methods and static fields.

## Declaring a class
```
class MyClass {
  // class body...
}
```
#### Within a class body, there are a range of features available.
```
class MyClass {
  // Constructor
  constructor() {
    // Constructor body
  }
  // Instance field
  myField = "foo";
  // Instance method
  myMethod() {
    // myMethod body
  }
  // Static field
  static myStaticField = "bar";
  // Static method
  static myStaticMethod() {
    // myStaticMethod body
  }
  // Static block
  static {
    // Static initialization code
  }
  // Fields, methods, static fields, and static methods all have
  // "private" forms
  #myPrivateField = "bar";
}
```

```
function MyClass() {
  this.myField = "foo";
  // Constructor body
}
MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function () {
  // myStaticMethod body
};
MyClass.prototype.myMethod = function () {
  // myMethod body
};

(function () {
  // Static initialization code
})();
```

# Extends and inheritance

```
class Color {
  #values;
  constructor(r, g, b, a = 1) {
    this.#values = [r, g, b, a];
  }
  get alpha() {
    return this.#values[3];
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#values[3] = value;
  }
}
```

```
class ColorWithAlpha extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b); -> bind uses this
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha value must be between 0 and 1");
    }
    this.#alpha = value;
  }
}
```

# promises read from the code notes written by me
#  read MDN docs