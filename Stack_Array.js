class Stack {
    constructor() {
        this.array = [];
    }

    peek() { //O(1)
        return this.array[this.array.length - 1];
    }

    push(value) { // O(1)
        this.array.push(value);
    }

    pop() { //O(1)
        this.array.pop();
    }
}

