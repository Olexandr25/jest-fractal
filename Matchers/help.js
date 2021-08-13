// Connection of describe-test.js
const { describe, test } = require("../describe-test.js");

// Connection Lodash library
var _ = require('lodash');

function expect(exp) {
    return {        
        stringMatching: value => exp.match(value),
        stringContaining: value => exp.includes(value),
        toEqual: (value_1, value_2) => _.isEqual(value_1, value_2)
    }
}


// First describe
describe('String matcher:', () => {
    // Second describe of tests
    test('values', () => {
        expect('pizzaa').stringContaining('zz');
    })
})


var str = "Stringa is here";

str.forEach(element => {
    
});