// Connection of describe-test.js
const { describe, test } = require("../describe-test.js");

// Connection Lodash library
var _ = require('lodash');

function expect(exp) {
    return {        
        // First value > second value
        toBeGreaterThan: value => {
            if(_.gt(exp, value)){
                console.log('\x1b[32m', 'Success');
            } else {
                console.log('\x1b[31m', 'Failed');
            }
        },
        // First value >= second value
        toBeGreaterThanOrEqual: value => {
            if(_.gte(exp, value)){
                console.log('\x1b[32m', 'Success');
            } else {
                console.log('\x1b[31m', 'Failed');
            }
        },
        // First value < second value
        toBeLessThan: value => {
            if(_.lt(exp, value)){
                console.log('\x1b[32m', 'Success');
            } else {
                console.log('\x1b[31m', 'Failed');
            }
        },
        // First value <= second value
        toBeLessThanOrEqual: value => {
            if(_.lte(exp, value)){
                console.log('\x1b[32m', 'Success');
            } else {
                console.log('\x1b[31m', 'Failed');
            }
        },
        // First value isNan or is a 'number'
        toEqualNaN: value => {
            if(_.isNaN(exp) || typeof exp === 'number'){
                console.log('\x1b[32m', 'Success');
            } else {
                console.log('\x1b[31m', 'Failed');
            }
        },
        // First value in float is close to second value, + how much is close?
        // 0.1 + 0.2 = 0.30000000000000004
        // And x is how much close in the end, +x or -x
        toBeCloseTo: (value, x) => {
            let y = Math.abs(exp - value) < Math.pow(0.1, x);
            if (y){
                console.log('\x1b[32m', 'Success');
            } else {
                console.log('\x1b[31m', 'Failed');
            }
        }
    }
}


// First describe
describe('Truthiness matcher:', () => {
    // Second describe of tests
    test('values', () => {
        expect(2).toBeGreaterThan(1);
        expect(1).toBeGreaterThanOrEqual(1);
        expect(-5).toBeLessThan(1);
        expect(1).toBeLessThanOrEqual(1);
        expect(NaN).toEqualNaN();
        expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
    })
})