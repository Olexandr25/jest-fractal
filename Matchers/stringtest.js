// Connection of describe-test.js
const { describe, test } = require("../describe-test.js");

// Connection Lodash library
//var _ = require('lodash');


function expect(exp) {
    return {
        //Check one string not equal to uther
        toMatchNot: value => {
            if (exp !== value)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        toMatch: value => {
            if (exp.match(value))
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        // Check if one type  equal to outher type
        toEqual: value => {
            if ((typeof value) == (typeof exp))
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        toMatchReg: value => {
            if (exp.match(value))
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        }

    }
}


//First describe
describe('String matcher:', () => {
    // Second describe of tests
    test('values', () => {
        expect("string").toMatchReg(/ee/)
    })
})


