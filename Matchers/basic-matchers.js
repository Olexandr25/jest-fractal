@import "../describe-test";

var colors = require('colors');

function expect(value) {
    return {
        toBe: exp => {
            if (value === exp)
                console.log('Success'.green);
            else
                console.log('Failed'.red);
        },
        toBeNot: exp => {
            if (value !== exp)
                console.log('Success'.green);
            else
                console.log('Failed'.red);

        }
    }
}

const sum = (a, b) => a + b;

// expect(sum(41, 1)).toBe(42);
// expect(sum(1, 4)).toBe(10);


// Make describe function
// function describe(str, callback) {
//     console.log(colors.blue(str));
//     callback();
// }

// function test(str, callback) {
//     console.log(colors.magenta(str));
//     callback();
// }

describe('Native matcher:', () => {
    test('sume values', () => {
        expect(sum(41, 1)).toBe(42)
        expect(sum(1, 4)).toBeNot(5)
    })
})