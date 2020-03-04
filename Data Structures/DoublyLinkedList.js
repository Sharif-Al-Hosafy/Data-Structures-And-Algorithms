class Node {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
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
        var toBeRemoved = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = toBeRemoved.prev;
            this.tail.next = null
            toBeRemoved.prev = null;
        }
        this.length--;
        return toBeRemoved;
    }

    shift() {
        if (!this.head) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        if (this.length === 0) return this.push(val);
        var newNode = new Node(val);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if (index >= this.length || index < 0) return null;
        var mid = Math.floor(this.length / 2);
        var current, cnt;
        if (index > mid) {
            cnt = this.length - 1;
            current = this.tail;
            while (cnt !== index) {
                current = current.prev;
                cnt--;
            }
        } else {
            cnt = 0;
            current = this.head;
            while (cnt !== index) {
                current = current.next;
                cnt++;
            }
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true
        }
        return false;
    }

    insert(index, val) {
        if (index >= this.length || index < 0) return false;
        if (this.length === 0) return !!this.unshift(val);
        if (index === this.length - 1) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index >= this.length || index < 0) return false;
        if (this.length === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return true;
    }
}