export type ListType = number | string

class SinglyLinkedListNode<T> {
    val: T;
    public next: SinglyLinkedListNode<T>;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList<T> {
    head: SinglyLinkedListNode<T>;
    private tail: SinglyLinkedListNode<T>;
    private length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T) {
        const newNode = new SinglyLinkedListNode<T>(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return true;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null
        }
        return true;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        return current;
    }

    unshift(val: T) {
        const newHead = new SinglyLinkedListNode<T>(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead
        }
        this.length++;
        return true;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current
    }

    set(index: number, val: T) {
        let foundNode = this.get(index);
        if (!foundNode) return false;
        foundNode.val = val;
        return true;
    }

    insert(index: number, val: T) {
        if (index < 0 || index >= this.length) return null;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        const newNode = new SinglyLinkedListNode(val);
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) return null;
        if (index === this.length - 1) return this.pop()
        if (index === 0) return  this.shift();
        const prev = this.get(index - 1);
        prev.next = prev.next.next;
        this.length--;
        return true
    }

    reverse() {
        if (!this.head) return undefined;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this
    }
}

const list = new SinglyLinkedList();
list.push(1)
list.push(2)
list.push(3)
console.log(list)
