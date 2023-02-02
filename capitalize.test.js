const capitalize = require('./capitalize.js');

test('string compare', () => {
    expect(capitalize('tula')).toBe('Tula');
});

test('string compare', () => {
    expect(capitalize('me gustan los pokemones')).toBe('Me gustan los pokemones');
});

test('string compare', () => {
    expect(capitalize('MY NAME IS GIOVANNI GIORGIO BUT EVERYBODY CALLS ME GIORGIO')).toBe('MY NAME IS GIOVANNI GIORGIO BUT EVERYBODY CALLS ME GIORGIO');
});