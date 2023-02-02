const analyzeArray = require('./analyzeArray.js');

test('test obj 1 2 3 4 5 6 7 8 9', () => {
    expect(analyzeArray([1,2,3,4,5,6,7,8,9])).toEqual({ 'average': 5, 'min': 1, 'max': 9, 'length': 9 });
})