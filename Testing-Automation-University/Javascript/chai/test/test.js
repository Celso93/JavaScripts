const chai = require('chai');
const should = chai.should();
const mocha = require('mocha'); // remeber to install mocha and run npx mocha test.js
 
// chai.config.showDiff = false; // turn off reporter diff display
// chai.config.truncateThreshold = 1; // disable truncating
// chai.config.includeStack = false; // turn on stack trace

describe("objects", function () {
    it("should equal", function () {
        let a = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 3
                }
            }
        };
        let b = {
            a: 1,
            b: 2,
            c: {
                a: 1,
                b: 2,
                c: {
                    a: 1,
                    b: 2,
                    x: 4
                }
            }
        };
        a.should.deep.equal(b);
    });
});

// what is object.prototype