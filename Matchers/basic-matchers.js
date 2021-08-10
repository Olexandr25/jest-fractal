const fn = require("../describe-test");

function expect(value) {
    return {
        toBe: exp => {
            if (value === exp)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        },
        toBeNot: exp => {
            if (value !== exp)
                console.log('\x1b[32m', 'Success');
            else
                console.log('\x1b[31m', 'Failed');
        }
    }
}

const sum = (a, b) => a + b;

fn.describe('Native matcher:', () => {
    fn.test('sume values', () => {
        expect(sum(41, 1)).toBe(42)
        expect(sum(1, 4)).toBeNot(5)
    })
})