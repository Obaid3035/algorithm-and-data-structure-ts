import {ListType} from "./singly-linked-list";

class DoublyLinkedListNode {
    constructor(
        public val: ListType,
        public next: DoublyLinkedListNode = null,
        public prev: DoublyLinkedListNode = null
    ) {
    }
}


class DoublyLinkedList {

    constructor(
        public head: DoublyLinkedListNode = null,
        public tail: DoublyLinkedListNode = null,
        public length: number = 0
    ) {
    }

    push(val: ListType) {
        const newNode = new DoublyLinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return true;
    }

    shift() {
        if (!this.head) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null
        }
        this.length--;
        return true;
    }

    unshift(val: ListType) {
        let newNode = new DoublyLinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return true;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) return null
        let current, counter;
        if (index <= this.length / 2) {
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
        }
        return current
    }

    set(index: number, val: ListType) {
        const foundNode = this.get(index);
        if (!foundNode) return false;
        foundNode.val = val;
        return true;
    }

    insert(index: number, val: ListType) {
        if (index < 0 || index >= this.length) return null
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        const newNode = new DoublyLinkedListNode(val);
        const beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index: number) {
        if (index === 0) this.shift();
        if (index ===  this.length - 1) this.pop();
        const foundNode = this.get(index);
        let afterNode = foundNode.next;
        let beforeNode = foundNode.prev;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        foundNode.next = null;
        foundNode.prev = null;
        this.length--;
        return true;
    }
}



const list = new DoublyLinkedList();

list.push(1)
list.push(2)
list.push(3)
list.remove(1)
