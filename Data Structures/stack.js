class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        }
        else {
            this.last.next = newNode;
            newNode.prev = this.last;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    pop() {
        if (!this.first) return undefined;
        if (this.size === 1) {
            this.size--;
            return this.first.val;
        }
        if (this.size <= 0) return null;
        var removed = this.last;
        this.last = removed.prev;
        this.last.next = null;
        removed.prev = null;
        this.size--;
        return removed.val;
    }
}