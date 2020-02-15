class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (this.length === 0) return undefined;
        var temp = this.head;
        this.head = temp.next;
        this.length--;
        return temp;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        var cnt = 0;
        var pointer = this.head;
        while (cnt !== index) {
            pointer = pointer.next;
            cnt++;
        }
        return pointer;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode === undefined) return false;
        foundNode.val = val;
        return true;
    }

    insert(index, val) {
        if (index === 0) {
            this.unshift(val);
            return true;
        }

        if (index === this.length) {
            this.push(val);
            return true;
        }

        if (index < 0 || index > this.length) return false;

        var newNode = new Node(val);
        var foundNode = this.get(index - 1);
        newNode.next = foundNode.next;
        foundNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index === 0) {
            this.shift();
            return true;
        }

        if (index === this.length) {
            this.pop();
            return true;
        }

        var toBeRemoved = this.get(index);
        var prev = this.get(index - 1);
        prev.next = toBeRemoved.next;
        toBeRemoved.next = null;
        this.length--;
        return toBeRemoved;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;

        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next
        }
        console.log(arr);
    }
}