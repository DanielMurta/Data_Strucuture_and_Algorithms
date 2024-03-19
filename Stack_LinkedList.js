class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() { //O(1)
        return this.top;
    }

    push(value) { // O(1)
        const newNode = new Node(value);
         
        if (this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
    }

    pop() { //O(1)

    }

}