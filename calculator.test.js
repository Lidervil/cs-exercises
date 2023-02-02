const calculator = require('./calculator.js');

test('add', () =>{
    expect(calculator.add(1,2)).toBe(3);
})

test('substract', () =>{
    expect(calculator.sub(1,2)).toBe(-1);
})

test('multiply', () =>{
    expect(calculator.multiply(1,2)).toBe(2);
})

test('divide', () =>{
    expect(calculator.divide(1,2)).toBe(0.5);
})

test('divide', () =>{
    expect(calculator.divide(1,0)).toBe('cannot divide by zero');
})