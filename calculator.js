
const calculator = {
    add: (a, b) => {
        if ( typeof a !== 'number' || typeof b !== 'number' ) {
            return 'input a number'
        }
        return a + b;
    },
    sub: (a, b) => {
        if ( typeof a !== 'number' || typeof b !== 'number' ) {
            return 'input a number'
        }
        return a - b;
    },
    multiply: (a, b) => {
        if ( typeof a !== 'number' || typeof b !== 'number' ) {
            return 'input a number'
        }
        return a * b;
    },
    divide: (a, b) => {
        if ( typeof a !== 'number' || typeof b !== 'number' ) {
            return 'input a number'
        }
        if ( b === 0 ) {
            return 'cannot divide by zero'
            }

        return a / b;
    }
}

module.exports = calculator;