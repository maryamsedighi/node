const result = require('../src/calculator');

test('calculatorTest1', () => {
    expect(result.calculator(2, 3, '+'))
        .toBe(5);
});

test('calculatorTest2', () => {
    expect(result.calculator(2, 3, '-'))
        .toBe(-1);
});

test('calculatorTest3', () => {
    expect(result.calculator(2, 3, 'x'))
        .toBe(6);
});

test('calculatorTest4', () => {
    expect(result.calculator(6, 3, '/'))
        .toBe(2);
});