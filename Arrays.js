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
        const lastItem = this.data[this.length - 1];

        delete this.data[this.length - 1];
        this.length--;

        return lastItem;
    }

    delete(index) { //O(n)
        const item = this.data[index];

        this.shiftItems(index);

        return item;
    }

    shiftItems(index) { //O(n)
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }
}