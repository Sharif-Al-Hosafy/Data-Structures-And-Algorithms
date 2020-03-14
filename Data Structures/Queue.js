class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    Enqueue(val) {
        var newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    Dequeue() {
        if (!this.first) return undefined;
        if (this.size === 1) {
            this.size--;
            return this.first.val;
        }
        if (this.size <= 0) return null;
        var removed = this.first;
        this.first = removed.next;
        removed.next = null;
        this.size--;
        return removed.val;
    }
}