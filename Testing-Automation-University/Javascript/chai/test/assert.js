// Variables
const chai = require('chai');
const assert = chai.assert; 
const expect = chai.expect;
const should = chai.should();

let a=1, b=1;
function myObj(){ return{ a: 100, b: 'Hello' } }
x = new myObj(), y = new myObj();
let numbers = [1,2,3,0];

//----------------------------------------------------------------------//
// Expect

expect(a).to.be.equals(b, 'a and b are not equal');

expect(x).to.be.an('object');

// to check the object contecnt we neel to use deep.equals or deep.equal
expect(x).to.be.deep.equals(y, 'x and y are not equal');

// We can chain diferrent expressions using: and, but, with
// It is always a good practice to use a or an to check target type before performing assertion on it
expect(x).to.be.an('object').and.to.be.deep.equals(y, 'x and y are not equal');

// arrays
expect(numbers).to.be.an('array').that.includes(3);

//--------------------------------------------------------------------------//
// Should
// The main difference is that should extends each object with a should property to start the chain

//should - simple comparison
a.should.be.equals(b);

//should – object comparison with deep.equal or deep.equals
x.should.be.deep.equals(y, 'x and y are not equal');

//should - chaining expressions
(x).should.be.an('object').and.to.be.deep.equals(y);

//----------------------------------------------------------------------------//

// Assert
// One thing to be noted is that using assert we cannot chain expressions as we do with expect and should.

//assert – simple comparison
assert.equal(a,b, "a and b are not equal");

//assert – object comparision
assert.deepEqual(x,y, "x and y are not equal");

//assert – arrays
(numbers).should.be.an('array').that.includes(3);
assert.isArray(numbers, 'numbers is not an array');

//----------------------------------------------------------------------------//
// Difference should x expect

// const expect = chai.expect; — expect requires just a reference to the expect function.
// const should = chai.should(); — whereas with the should require, see the function as being executed as we see here.

// should.exist
// should.not.exist
// should.equal
// should.not.equal
// should.Throw
// should.not.Throw