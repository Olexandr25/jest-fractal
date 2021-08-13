const { describe, test } = require("../src/describe-test");
const { expect } = require("../src/Matchers/basic-matchers.js");

// Call test
// First global describe
describe('Native matcher:', () => {
    // Second describe of tests
    test('values', () => {
        expect(2).toBe(2);
        expect(42).toBe(42);
        expect(5).toBeNot(6);
        expect({a: undefined, b: 2}).toEqual({b: 2});
    })
})