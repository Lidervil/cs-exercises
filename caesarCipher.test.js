const caesarCipher = require('./caesarCipher.js');

test('test a-z', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 25)).toBe('zabcdefghijklmnopqrstuvwxy');
})