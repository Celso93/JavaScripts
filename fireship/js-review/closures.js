// Closures combination variable outside of a function
let b = 4; // parent scope -> HEaP MEMORY

function sum(a) {
    // closures is a function that capture a variable outside of brackets (in this case is b)
    return result = a + b;
};

console.log(sum(6))

// More memory and computation
// Data encapsulation

function encapsulatedState(x) {
    let state = 10;
    return function() {
      state += x;
      return state;
    }
  }

// more information https://www.youtube.com/watch?v=vKJpN5FAeF4