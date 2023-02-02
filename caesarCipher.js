function caesarCipher( string , shiftFactor ) {

    const abc = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ];

    const ABC = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
    ];

    let stringArray = []
    let mayusMinusArray = []
    let regex = /^[a-zA-Z]+$/;

    for ( let i = 0 ; i < string.length ; i++ ) {
        
        if ( !regex.test(string.charAt( i )) ) {
            stringArray.push( string.charAt( i ) );
            mayusMinusArray.push( '' ); 
        } 
        
        for ( let j = 0 ; j < abc.length ; j++ ) {
            if ( string.charAt( i ) === abc[j]) {
                stringArray.push( j );
                mayusMinusArray.push( 'min' ); 
            }

            if ( string.charAt( i ) === ABC[j]) {
                stringArray.push( j );
                mayusMinusArray.push( 'may' );     
            }
        }
    }

    const shiftedAbc = shiftABC( shiftFactor, abc );
    const shiftedABC = shiftABC( shiftFactor, ABC );
    let currentAbc = shiftedAbc;

    let shiftedArray = [];

    for ( let i = 0 ; i < stringArray.length ; i++ ) {
        if ( mayusMinusArray[i] === '' ) {
            shiftedArray.push( stringArray[i] );
        } else {
            if ( mayusMinusArray[i] ==='min' ) {
                currentAbc = shiftedAbc;
            } else {
                currentAbc = shiftedABC;
            }
            shiftedArray.push( currentAbc[stringArray[i]] );
        }
    }

    let shiftedString = '';

    for ( let i = 0 ; i < shiftedArray.length; i++ ) {
        shiftedString += shiftedArray[i];
    }

    return shiftedString;
}

console.log( caesarCipher( 'Hello World', 2 ) );

function shiftABC ( shiftFactor , abc ) {
    if (shiftFactor > 25) { 
        while (shiftFactor > 25) {
            shiftFactor -= 26;
        }
    }

    if (shiftFactor < 0) { 
        while (shiftFactor < 0) {
            shiftFactor += 26;
        }
    }

    let shiftedABC = []

    for ( let i = shiftFactor; i < abc.length; i++ ) {
        shiftedABC.push( abc[i] );
    }

    let shiftedIterator = 26 - shiftedABC.length;

    for ( let i = 0 ; i < shiftedIterator ; i++ ) {
        shiftedABC.push( abc[i] );
    }

    return shiftedABC;
}

module.exports = caesarCipher;