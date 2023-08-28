 const calculator = require('./calculator');

 test('add (4,2) is 8', () => {
    expect(calculator.add(4,2)).toBe(6);
 });

 test('subtract (4,2) is 2', () => {
    expect(calculator.subtract(4,2)).toBe(2);
 });

 test('subtract (1,5) is -4', () => {
    expect(calculator.subtract(1,5)).toBe(-4);
 });

 test('divide (8,2) is 4', () => {
    expect(calculator.divide(8,2)).toBe(4);
 });

 test('divide (500,2) is 1000', () => {
    expect(calculator.multiply(500,2)).toBe(1000);
 });


