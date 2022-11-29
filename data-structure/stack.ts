import {ListType} from "./singly-linked-list";

class StackNode {
    constructor(
        public value: ListType,
        public next: StackNode = null
    ) {
    }
}

class Stack {
    constructor(
        public first: StackNode = null,
        public last: StackNode = null,
        public size: number = 0
    ) {
    }

    push(val: ListType) {
        const newNode = new StackNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
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


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.pop();
