// First global describe with callback
function describe(str, callback) {
    console.log('\x1b[34m', str);
    callback();
}

// Second describe of test with callback
function test(str, callback) {
    console.log('\x1b[35m', str);
    callback();
}

// Do export from this file to another
// and use ~ const fn = require("./describe-test.js");
module.exports = {describe, test};