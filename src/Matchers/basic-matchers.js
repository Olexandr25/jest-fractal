// Connection of describe-test.js
const { describe, test } = require("../describe-test.js");

// Connection Lodash library
var _ = require('lodash');

// Function of basic equal
function expect(exp) {
    return {
        // Check is this x === y
        toBe: value => (exp === value) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),
        // Check is not this x !== y
        toBeNot: value => (exp !== value) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),
        // Check Deep equality
        toEqual: value => _.isMatch(exp, value) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),
        toEqualConvertToString: value => (value.length === exp.length && value.every((v, index) => v === exp[index])) ? 
            console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed')
    }
}

// Sum of a + b
const sum = (a, b) => a + b;

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [1, 2, 3];

// Call test
// First global describe
describe('Native matcher:', () => {
    // Second describe of tests
    test('values', () => {
        expect(sum(41, 1)).toBe(42);
        expect(sum(1, 4)).toBeNot(6);
        expect(a).toEqual(c);
        expect({a: undefined, b: 2}).toEqual({b: 2});
    })
})

module.exports = { expect };