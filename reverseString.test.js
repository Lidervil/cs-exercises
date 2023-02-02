const reverseString = require('./reverseString.js');

test('String reverse one word', () => {
    expect(reverseString('tula')).toBe('alut');
})

test('String reverse two words', () => {
    expect(reverseString('My name is Giorno giovanna and i have a dream')).toBe('maerd a evah i dna annavoig onroiG si eman yM');
})