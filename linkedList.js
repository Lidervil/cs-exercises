
const ll = LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);
ll.prepend(0);
console.log(ll.at(0));
console.log(ll.at(10));
ll.pop();
console.log(ll.contains(0));
console.log(ll.contains(10));
console.log(ll.find(1));
console.log(ll.find(10));
console.log(ll.head);
console.log(ll.tail);
console.log(ll.size);
console.log(ll.toString());

function Node() {
    let value, nextNode = null;
    
    return { value, nextNode };
}

function LinkedList() {
    let head = null;
    let tail = null;
    let size = 0;

    function append(value) {
        
        let node = Node();
        node.value = value;

        if (this.head === null) {
            this.head = node;
        }

        if (this.tail !== null) {
            this.tail.nextNode = node;
        } 

        this.tail = node;
        this.size++;

        console.log(`Adding new node with value of ${value} to end of Linked List.`);
    }

    function prepend(value) {

        let node = Node();
        node.value = value;
        node.nextNode = this.head;

        if (this.tail === null) {
            this.tail = node;
        }

        this.head = node;
        this.size++;

        console.log(`Adding new node with value of ${value} to start of Linked List.`);
    }

    function at( index ) {

        if ( index >= this.size || index < 0) {
            return null;
        }

        if ( index === 0 ) {
            return this.head;   
        } 

        if ( index === this.size - 1 ) {
            return this.tail;
        }

        let node = this.head;

        for (let i = 0; i < index; i++) {
            node = node.nextNode;
        } 

        return node;
    }

    function pop() {

        if ( this.head === null ) {
            return null;
        }
        
        if ( this.head.nextNode === null ) {
            this.head = null;
            return;
        }

        console.log(`Removing from the Linked List the node with value of ${this.tail.value}`);

        let indexToRemove = this.size - 2;
        this.tail = this.at(indexToRemove);
        this.tail.nextNode = null;
        this.size--;
        
    }

    function contains( value ) {

        let bool = false;

        if ( this.head === null ) {
            return bool;
        }

        for ( let i = 0; i < this.size ; i++) {
            if ( this.at(i).value === value ) {
                bool = true;
                break;
            }
        }

        return bool;
    }

    function find( value ) {

        if ( this.contains( value ) === false ) {
            console.log(`The value isn't in the Linked List`);
            return;
        }

        for ( let i = 0 ; i < this.size ; i++ ) {
            if ( this.at(i).value === value ) {
                return i;
            }
        }

    }

    function toString() {
        let toString = ``;

        for ( let i = 0 ; i < this.size ; i++ ) {
            toString += `( ${ this.at(i).value } ) -> `;
        }

        toString += `null`;

        return toString;
    }

    console.log('Creating new Linked List.');

    return { head, size, tail, append, prepend, at, pop, contains, find, toString };
}