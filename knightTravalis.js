const board = boardGen();

console.log(board);

function shortestPath( startPos , endPos, currentPath = [] ) {
    
    let startPosIndex = [ startPos[0] - 1 , startPos[1] - 1 ];
    let endPosIndex = [ endPos[0] - 1, endPos[1] - 1 ];
    
    currentPath[currentPath.length] = [ board[startPosIndex[0]], board[startPosIndex[1]] ];
    
    if ( startPosIndex === endPosIndex ) {
        return currentPath;
    }
    
    if ( currentPath.length > 7 || startPosIndex[0] > 7 || startPosIndex[1] > 7 ) {
        return
    } 

    const knightPath = [shortestPath( knightMoves( startPos, 1), [ endPos ], currentPath ),
                         shortestPath( knightMoves( startPos, 2), [ endPos ], currentPath ),
                         shortestPath( knightMoves( startPos, 3), [ endPos ], currentPath ), 
                         shortestPath( knightMoves( startPos, 4), [ endPos ], currentPath ),
                         shortestPath( knightMoves( startPos, 5), [ endPos ], currentPath ),
                         shortestPath( knightMoves( startPos, 6), [ endPos ], currentPath ),
                         shortestPath( knightMoves( startPos, 7), [ endPos ], currentPath ),
                         shortestPath( knightMoves( startPos, 8), [ endPos ], currentPath )];

    let smallestArray = knightPath[0];

    for ( let i = 0; i < knightPath.length; i++ ) {
        if (knightPath[i].length < smallestArray.length) {
            smallestArray = knightPath[i];
        }
    }

    return smallestArray;
}

function knightMoves( coords , move ) {

    let newCoords;

    switch (move) {
        case 1:
            newCoords = [ coords[0] + 1, coords[1] - 2 ];
            break; 
        case 2:
            newCoords = [ coords[0] + 2, coords[1] - 1 ];
            break; 
        case 3:
            newCoords = [ coords[0] + 1, coords[1] + 2 ];
            break; 
        case 4:
            newCoords = [ coords[0] + 2, coords[1] + 1 ];
            break; 
        case 5:
            newCoords = [ coords[0] - 1, coords[1] - 2 ];
            break; 
        case 6:
            newCoords = [ coords[0] - 2, coords[1] - 1 ];
            break; 
        case 7:
            newCoords = [ coords[0] - 1, coords[1] + 2 ];
            break; 
        case 8:
            newCoords = [ coords[0] - 2, coords[1] + 1 ];
            break; 
    }

    return newCoords;
}

function boardGen() {
    let boards = [];

    for ( let i = 0 ; i < 8 ; i++ ) {
        boards.push([]);
        for ( let j = 0 ; j < 8 ; j++ ) {
            boards[i].push([i, j]);
        }
    }

    return boards;
}