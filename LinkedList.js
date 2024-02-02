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
}

const MylinkedList = new LinkedList(10);
MylinkedList.append(5);
MylinkedList.append(16);
MylinkedList.prepend(1);
console.log(MylinkedList);