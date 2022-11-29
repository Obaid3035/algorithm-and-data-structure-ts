import {ListType} from "./singly-linked-list";

class QueueNode {
    constructor(
        public value: ListType,
        public next: QueueNode = null
    ) {
    }
}

class Queue {
    constructor(
        public first: QueueNode = null,
        public last: QueueNode = null,
        public size: number = 0
    ) {
    }

    enqueue(val: ListType) {
        const node = new QueueNode(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const queue = new Queue();
