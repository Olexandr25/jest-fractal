// Connection of describe-test.js
const { describe, test } = require("../describe-test.js");

// Connection Lodash library
var _ = require('lodash');

// Function of basic equal
function expect(exp) {
    return {
        // Check is this x === y
        toBe: value => {
            if (exp === value)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        // Check is not this x !== y
        toBeNot: value => {
            if (exp !== value)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        // Check Deep equality
        // ! Doesn't work
        // toEqual: value => {
        //     const isArrayEqual = (value, exp) => _.isEmpty(_.xorWith(value, exp, _.isEqual));

        //     if (isArrayEqual)
        //         console.log('\x1b[32m', 'Success');
        //     else
        //         console.log('\x1b[31m', 'Failed');
        // },

        toEqualConvertToString: value => {
            // compare lengths - can save a lot of time 
            let result = value.length === exp.length && value.every((v, index) => v === exp[index])
            if (result)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        }

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
    test('sum values', () => {
        expect(sum(41, 1)).toBe(42)
        expect(sum(1, 4)).toBeNot(6)
    })
})