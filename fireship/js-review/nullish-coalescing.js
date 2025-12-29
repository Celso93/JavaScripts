// Weird thing about JS
// What is truthy or falsy
// Type Coercion

// What is true or Javascript
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (infinity)
// if (-infinity)

// What is false in Javascript
// '', 0, null, undefined
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// Nullish coalescing is a new operator introduced in ES2020. 
// Similar to the logical OR operator ||, but it only returns the right-hand side if the left-hand side is 'nul'l or 'undefined'.
const example = null ?? 'null... so this string will be storaged'
console.log(example)

const example2 = undefined ?? 'undefined... so this string will be storaged'
console.log(example2)

const example3 = 0 ?? 'is not null or false.. so this string will not be storaged'
console.log(example3)