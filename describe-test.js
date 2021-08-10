// Make describe function
function describe(str, callback) {
    console.log(colors.blue(str));
    callback();
}

function test(str, callback) {
    console.log(colors.magenta(str));
    callback();
}