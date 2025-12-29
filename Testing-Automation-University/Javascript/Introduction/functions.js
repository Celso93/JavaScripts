/*
  FUNTIONS() {
    Organize the code in blocks
    function nameOfFuction(parameters){logic}
  }
*/

function sum(num1, num2) {
    return num1 + num2;
}

function multiple(num1, num2){
    return num1*num2;
}

console.log(sum(2,3))
console.log(multiple(2,3))

// We can store the information
const exampleOfStorage = multiple(100, 100)
console.log(exampleOfStorage)

// Anonymous and Arrow Functions

/* 
  Anonymous is when we dont give a name to function.
    You can use this if this functions is not gonna be used in another place again !
    We use together with CALLBACKs: A function that can be used as a parameter in another functions;
    CALLBACKs: A function that can e used as a parameter in another functions;
*/

setTimeout(function () {
    console.log("This is a callback")
}, 1000);

/*
  Arrow functions
    Function with diffent syntax
*/

setTimeout(() => {
    console.log("This is a arrowfunction in callback")
}, 1000);

// If you have one line of code you can use like this !
setTimeout(() => console.log("This is a arrowfunction inline in callback"), 1000);

/* 
    Remenber: they will return a undefined value if you not use return 
    Dont use arrow function just because is nice !
*/