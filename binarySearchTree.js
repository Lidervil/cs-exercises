
class Node {
    constructor( value, left, right ) {

        if ( left === undefined ) {
            left = null;
        }

        if ( right === undefined ) {
            right = null;
        }

        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor( array ) {
        let noDuplicates = removeDuplicates( array )
        let sortedArray = mergeSort( noDuplicates );
        let root = buildTree( sortedArray );
        this.root = root;
    }

    find( value ) {
        let current = this.root;

        while ( current ) {
            if ( current.value === value ) {
                return current;
            }

            if ( current.value > value ) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }

    insert( value ) {
        let current = this.root;

        if ( this.find( value ) ) {
            console.log('The tree already has that value');
            return;
        }

        while ( current ) {

            if ( current.value > value ) {
                if ( !current.left ) {
                    current.left = new Node( value );
                    return;
                }
                current = current.left;
            } else {
                if ( !current.right ) {
                    current.right = new Node( value );
                    return;
                }
                current = current.right;
            }
            
        }

    }
   
    delete( value ) {
        if ( !this.find( value ) ) {
            console.log( `The tree doesn't have this value` );
            return;
        }
        this.root = this.deleteNode(this.root, value);
        console.log( `Deleting node with value ${value}` );
    }
    
    deleteNode( node, value ) {
        if ( !node ) return node;
        if ( value < node.value ) {
            node.left = this.deleteNode( node.left, value );
        } else if ( value > node.value ) {
            node.right = this.deleteNode( node.right, value );
        } else {
            if ( !node.left ) {
                return node.right;
            } else if ( !node.right ) {
                return node.left;
            }
            node.value = this.getMinValue( ode.right );
            node.right = this.deleteNode( node.right, node.value );
        }
        return node;
    }
    
    getMinValue( node ) {
        while ( node.left ) {
            node = node.left;
        }
        return node.value;
    }

    levelOrder( fn = ( nodeValue ) => nodeValue ) {
        let result = [];
        let queue = [];
        if ( this.root === null ) { return result; }
        queue.push( this.root );
        while ( queue.length > 0 ) {
            let node = queue.shift();
            result.push(fn( node.value ));
            if ( node.left !== null ) {
                queue.push( node.left );
            }
            if ( node.right !== null ) {
                queue.push( node.right );
            }
        }
        return result;
    }
    
    preOrder( node = this.root , fn = (nodeValue) => nodeValue ) {
        if ( !node ) return []; 
        let result = [ fn( node.value )];
        result.push(...this.preOrder( node.left ));
        result.push(...this.preOrder( node.right ));
        return result
    }
    
    inOrder( node = this.root , fn = (nodeValue) => nodeValue ) {
        if ( !node ) return []; 
        let result = [ ...this.inOrder( node.left ) ];
        result.push( fn( node.value ) );
        result.push(...this.inOrder( node.right ));
        return result
    }
    
    postOrder( node = this.root , fn = (nodeValue) => nodeValue ) {
        if ( !node ) return []; 
        let result = [ ...this.postOrder( node.left ) ];
        result.push(...this.postOrder( node.right ));
        result.push( fn( node.value ) );
        return result
    }

    height(node = this.root) {
        if ( !node ) return 0;

        let leftHeight = this.height( node.left );
        let rightHeight = this.height( node.right );

        if ( leftHeight > rightHeight ) {
            return leftHeight + 1;
        } else {
            return rightHeight + 1;
        }
    }

    depth(node = this.root) {
        if ( !node ) return 0;
        let leftDepth = this.depth( node.left );
        let rightDepth = this.depth( node.right );
        return Math.max( leftDepth, rightDepth ) + 1;
    }

    isbalanced( node = this.root ) {

        let left = this.height( node.left );
        let right = this.height( node.right );
        let heightDifference = Math.abs( left - right );

        if ( heightDifference > 1 ) {
            return false;
        } else {
            return true;
        }

    }

    reBalance() {
        let noDuplicates = removeDuplicates( this.levelOrder() )
        let sortedArray = mergeSort( noDuplicates );
        let root = buildTree( sortedArray );
        this.root = root;
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if ( node.right ) {
      prettyPrint( node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if ( node.left ) {
      prettyPrint( node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true );
    }
}

const tree = new Tree( [ 1, 2, 3, 4, 2, 1, 5, 6, 7 ] );

console.log( tree );

const myArray = [ 1, 2, 3, 4, 2, 1 ];
const uniqueArray = removeDuplicates( myArray );

function removeDuplicates( array ) {
    return [ ...new Set( array ) ];
}

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

function buildTree( array ) {

    if (!array || !array.length) {
        return null;
    }
    
    let start = 0;
    let end = array.length - 1;
    let mid = Math.ceil( ( start + end ) / 2 );
    
    if (mid === -1) { return null; }

    let leftArray;
    let rightArray;

    if ( start > mid - 1 ) {
        leftArray = null;
    } else {
        leftArray = array.slice( start, mid );
    }

    if ( mid + 1 > end ) {
        rightArray = null;
    } else {
        rightArray = array.slice( mid + 1, end +1 );
    }

    let root = new Node( array[mid], buildTree( leftArray ), buildTree( rightArray ) );

    return root;
}