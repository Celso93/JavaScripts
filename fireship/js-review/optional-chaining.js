const obj = undefined;

// this is will break your code
// obj.hello = Cannot read properties of undefined (reading 'hello')

obj?.hello;

const arr = [1,2,3]
arr?.[0];

function foo(a,b) { }
foo?.(1,2);

// use optional-chaining to avoid undefined expection