const { describe, test } = require("../src/describe-test");
const { expect } = require("../src/Matchers/basic-matchers");


describe("Describe:", () =>{
    test("Test:", () =>{
        expect(23).toBe(23);
    })
})
