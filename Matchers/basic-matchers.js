// Connection of describe-test.js
const { describe, test } = require("../describe-test.js");

// Function of basic equal
function expect(value) {
    return {
        // Check is this x === y
        toBe: exp => {
            if (value === exp)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        // Check is not this x !== y
        toBeNot: exp => {
            if (value !== exp)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        }
    }
}

// Sum of a + b
const sum = (a, b) => a + b;

// Call test
// First global describe
describe('Native matcher:', () => {
    // Second describe of tests
    test('sum values', () => {
        expect(sum(41, 1)).toBe(42)
        expect(sum(1, 4)).toBeNot(5)
    })
})
