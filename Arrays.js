class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) { //O(1)
        return this.data[index];
    }

    push(item) { //O(1)
        this.data[this.length] = item;
        this.length++;

        return this.length;
    }

    pop() { //O(1)
    }

    delete(index) { //O(n)
    }

    
}