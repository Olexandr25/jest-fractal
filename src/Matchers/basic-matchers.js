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
            console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // First value > second value
        toBeGreaterThan: value => _.gt(exp, value) ? console.log(true) : console.log(false),

        // First value >= second value
        toBeGreaterThanOrEqual: value => _.gte(exp, value) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // First value < second value
        toBeLessThan: value => _.lt(exp, value) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // First value <= second value
        toBeLessThanOrEqual: value => _.lte(exp, value) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // First value isNan or is a 'number'
        toEqualNaN: value => (_.isNaN(exp) || typeof exp === 'number') ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // First value in float is close to second value, + how much is close?
        // 0.1 + 0.2 = 0.30000000000000004
        // And x is how much close in the end, +x or -x
        toBeCloseTo: (value, x) => Math.abs(exp - value) < Math.pow(0.1, x) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // Matches anything that an if statement treats as true (not false, 0, '', null, undefined, NaN)
        toBeTruthy: value => exp ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // Matches anything that an if statement treats as false (false, 0, '', null, undefined, NaN)
        toBeFalsy: value => !exp ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // Matches only null
        toBeNull: value => _.isNull(exp) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // The opposite of toBeUndefined
        toBeDefined: value => (exp !== undefined) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // Matches only undefined
        toBeUndefined: value => (_.isUndefined(value) && _.isUndefined(exp)) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // Matches true or false
        toBeBoolen: value => (_.isBoolean(value) && _.isBoolean(exp)) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        toMatchNot: value => (exp !== value) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        toMatch: value => (exp.match(value)) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // Check if one type  equal to outher type
        toEqual: value => ((typeof value) == (typeof exp)) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed'),

        // 
        toMatchReg: value => (exp.match(value)) ? console.log('\x1b[32m', 'Success') : console.log('\x1b[31m', 'Failed')
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