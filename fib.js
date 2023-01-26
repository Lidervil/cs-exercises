function fibsRec(n) {
    if ( n < 0 ) {
        return 'Positive inputs only please';
    }

    let fibArray = [ 0, 1 ];

    for ( let i = 2; i < n ; i++ ) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }

    return fibArray.slice(0, n);
}

function fibsRec(n, fibArray = [ 0, 1 ]) {

    if ( n < 0 ) {
        return 'Positive inputs only please';
    }

    if ( n < fibArray.length ) {
        return fibArray.slice(0, n);
    } else {
        fibArray[fibArray.length] = fibArray[fibArray.length-1] + fibArray[fibArray.length-2];
        return fibsRec(n, fibArray);
    }
}

console.log(fibsRec(-1));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));
console.log(fibsRec(6));
console.log(fibsRec(7));
console.log(fibsRec(8));
