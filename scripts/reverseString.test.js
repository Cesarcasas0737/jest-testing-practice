const reverseString = require('./reverseString')

describe('reverse string', () => {
    test('return a reverse string from what was inputed', () => {
        expect(reverseString("dog")).toBe("god");
    });
    test('return a reverse string from what was inputed', () => {
        expect(reverseString("abc")).toBe("cba");
    });
    test('return a reverse string from what was inputed', () => {
        expect(reverseString("dracula")).toBe("alucard");
    });
})