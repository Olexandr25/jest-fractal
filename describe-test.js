// Make describe function
function describe(str, callback) {
    console.log('\x1b[34m', str);
    callback();
}

function test(str, callback) {
    console.log('\x1b[35m', str);
    callback();
}

module.exports = {describe, test};