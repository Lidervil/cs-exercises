
const node1 = new Node(1, null, null);

console.log(node1);

class Node {
    constructor( value, left, right ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}