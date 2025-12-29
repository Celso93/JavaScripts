// Higher order function is a function that takes a function as an argument, or returns a function. 
// They are commonly used in functional programming, and are a powerful tool for abstracting away complexity.

// Functions are object, they can be initalize on a variable and use as a parameter

// Function DECLARATION (for GLOBAL CODE)
function sayHello(msg) { return `Said...${msg}` }

// Function EXPRESSION (for LOCAL CODE)
const sayHi = function(msg) { return `Said...${msg}` }

// Annonumous function
arr = [1, 2, 3, 4]
const exampleAnon = arr.map( function(indexOfArray) {
    return indexOfArray * 2;
}); // [ 2, 4, 6, 8 ]

console.log("----------------Higher Order Functions----------------")

// Callbacks
// A function that takes a function as an argument
function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiple(x, y) { return x * y; }
function math(x, y, operator) { return operator(x, y); }
  
math(5, 2, add); // 7
console.log( math(5, 2, multiple) ); // 10

// Functions that return another function
function funCreator() {
    return function(msg) { return `Said...${msg}` }
}