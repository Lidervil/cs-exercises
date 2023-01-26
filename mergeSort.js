function mergeSort( array ) {
    if ( array.length < 2 ) {
        return array;
    }

    let left = mergeSort( array.slice( 0, Math.floor( array.length / 2 ) ) );
    let right = mergeSort( array.slice( Math.floor( array.length / 2 ), array.length ) );

    return merge( left, right );
}

function merge( left, right ) {
    let sortedArray = [];

    while ( left.length > 0 && right.length > 0) {
        if ( left[0] < right[0] ) {
            sortedArray.splice( sortedArray.length, 0, left[0] );
            left.splice( 0, 1 );
        } else {
            sortedArray.splice( sortedArray.length, 0, right[0] );
            right.splice( 0, 1 );
        }
    }

    sortedArray = [...sortedArray, ...left, ...right];

    return sortedArray;
}


console.log(mergeSort( [ 0, 1, 2, 3, 4 , 5, -2, -1 ] ));