// Object
// Everything in javascript is a object

// Object literal syntax
const hunter = { 
    power: "nem",
    basic: {
        zetsu: 0,
        hatsu: 1,
        ten: 2,
        ren: 4
    },
};
console.log(hunter)

// Prototypal Inheritance: One object can inheritance properties from another object
// not happened all the time
const gon = Object.getPrototypeOf(hunter)
console.log(gon)

const gon2 = Object.getPrototypeOf(gon)
console.log(gon2) // will return null

console.log("----------------------------------------------------")

const ging = { level: "5 best hunter", }
const ging2 = Object.setPrototypeOf(ging, hunter)
console.log(ging2.power)
console.log( Object.getPrototypeOf(ging2) )

// more info in: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain