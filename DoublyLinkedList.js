// Doubly linked list in JavaScript

class Node {
    constructor(value){
        this.value = value,
        this.previous = null,
        this.next = null
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            previous: null,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        newNode.previous = this.tail.value;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        const newHead = new Node(value);

        this.head.previous = value;
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.previous = leader.value;
        newNode.next = holdingPointer;
        holdingPointer.previous = value;
        this.length++;
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode
    }
}

const MyDoublyLinkedList = new DoublyLinkedList(5);
MyDoublyLinkedList.append(10);
MyDoublyLinkedList.append(15);
MyDoublyLinkedList.prepend(0);
MyDoublyLinkedList.insert(1, 50)
console.log(MyDoublyLinkedList);
console.log(MyDoublyLinkedList.printList());