// 10 --> 5 --> 16

// let MylinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: {
//                     value: null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
    }

    prepend(value){
        const newHead = new Node(value);

        newHead.next = this.head;
        this.head = newHead;
        this.length ++;
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
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
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

    remove(index){
        if (index >= this.length) {
            
        }

        const leader = this.traverseToIndex(index - 1);
        const unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
    }
}

const MylinkedList = new LinkedList(10);
MylinkedList.append(5);
MylinkedList.append(16);
MylinkedList.prepend(1);
MylinkedList.insert(2, 99)
MylinkedList.insert(20, 8)
console.log(MylinkedList.printList());
MylinkedList.remove(4)
// console.log(MylinkedList);
// console.log(MylinkedList.printList());