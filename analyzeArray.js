function analyzeArray( array ) {

    let arrayAverage = 0; 
    let arrayMax = 0;
    let arrayMin = array[ 0 ];

    for ( let i = 0 ; i < array.length ; i++ ) {
        arrayAverage += array[ i ];
    }

    arrayAverage = arrayAverage / array.length;

    for ( let i = 0 ; i < array.length ; i++ ) {

        if ( array[ i ] > arrayMax ) {
            arrayMax = array[ i ];
        }

        if ( array[ i ] < arrayMin ) {
            arrayMin = array[ i ];
        }
    }

    return { 'average': arrayAverage, 'min': arrayMin, 'max': arrayMax, 'length': array.length };
}


console.log(analyzeArray([1,2,3,4,5,6,7,8,9]));

module.exports = analyzeArray;