// The basic functionality of Mocha is assertion.
const assert = require('assert');
let mocha = require('mocha');

describe('Math calculation', function() {
    const value1 = 10;
    const value2 = 10;

    it('sum of two numbers', function() {
        const result = value1 + value2;
        assert.equal(result, 20)
    });

    it('subtraction of two numbers', function() {
        const result = value1 - value2;
        assert.equal(result, 0)
    });

    it('multiple of two numbers', function() {
        const result = value1 * value2;
        assert.equal(result, 100)
    });

    it('divison of two numbers', function() {
        const result = value1 / value2;
        assert.equal(result, 1)
    });
});