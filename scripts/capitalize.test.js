const capitalize = require('./capitalize');

describe('capitalize', () => {
    test(' return first latter of string capitalized', () => {
        expect(capitalize("giant")).toBe("Giant");
    });
    test(' return first latter of string capitalized', () => {
        expect(capitalize("i like dogs")).toBe("I like dogs");
    });
})