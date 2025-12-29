/*
  Data Struture to describe "thing" 
    A collection of properties and values ( All valid values for a variable ) that describe something.
    Where do you store objects? In variables.

  Object literals x Classes
    When should you use a Class vs Object literal?
    Object literals are great for representing unique structures but when we need to repeat that structure Classes are better.
*/

// Object literals = {}
// example below
const cookie = {
    name: "choco",
    "lastName": "late", // example of how to write a key
    isGlutenFree: true,
    "+example": true,
    eatCookie: function(){
        console.log(`I am eating ${this.name}`);
    }
};

console.log(typeof(cookie));
console.log(cookie);
console.log(cookie.name);
console.log(cookie.eatCookie());

// You can assing a new value
cookie.lastName = "leite";
console.log(cookie.lastName);

// You can use [] to acess information
console.log(cookie['+example']);

console.log('-------------------------------------------------------------------')
/*
  Classes
    Template to create many other object with same proprities.
    The new keyword creates a new object based on the class’s structure.
    CamelCase with first letter upcase.

    This?
    Constructor = // Rules to create your cookies.
    You can set a function with function structure.
*/

class Cookie {
    constructor(name, isGlutenFree){
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }
    eatCookie(){
        console.log(`I am eating ${this.name}`);
    };
}

const myCookie = new Cookie('chocorate', false);
console.log(myCookie)
console.log(myCookie.name)
console.log(myCookie['isGlutenFree'])
console.log(myCookie.eatCookie())