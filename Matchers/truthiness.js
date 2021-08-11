// Connection of describe-test.js
const {
    describe,
    test
} = require("../describe-test.js");

// Connection Lodash library
var _ = require('lodash');

function expect(exp) {
    return {        
        // Matches anything that an if statement treats as true (not false, 0, '', null, undefined, NaN)
        toBeTruthy: value => {
            if (exp)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        // Matches anything that an if statement treats as false (false, 0, '', null, undefined, NaN)
        toBeFalsy: value => {
            if (!exp)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        // Matches only null
        toBeNull: value => {
            if (_.isNull(exp))
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        // The opposite of toBeUndefined
        toBeDefined: value => {
            if (exp !== undefined)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        // Matches only undefined
        toBeUndefined: value => {
            if (_.isUndefined(value) && _.isUndefined(exp))
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        // Matches true or false
        toBeBoolen: value => {
            if (_.isBoolean(value) && _.isBoolean(exp))
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        }

    }
}


// First describe
describe('Truthiness matcher:', () => {
    // Second describe of tests
    test('values', () => {
        expect(true).toBeTruthy();
        expect().toBeFalsy();
        expect(null).toBeNull();
        expect(2).toBeDefined();
        expect().toBeUndefined();
        expect(true).toBeBoolen(false);
    })
})