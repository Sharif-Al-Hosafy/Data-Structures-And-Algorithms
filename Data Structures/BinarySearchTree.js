class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (current.value > value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    while (true) {
      if (value === current.value) return true;
      else if (value < current.value) {
        if (current.left === null) return false;
        current = current.left;
      } else {
        if (current.right === null) return false;
        current = current.right;
      }
    }
  }

  bfs() {
    var Queue = [];
    var visited = [];
    Queue.push(this.root);

    while (Queue.length) {
      var current = Queue.shift();
      visited.push(current.value);
      if (current.left) Queue.push(current.left);
      if (current.right) Queue.push(current.right);
    }
    return visited;
  }

  dfsPreOrder() {
    var visited = [];
    function travers(current) {
      visited.push(current.value);
      if (current.left) travers(current.left);
      if (current.right) travers(current.right);
    }
    travers(this.root);
    return visited;
  }

  dfsPostOrder() {
    var visited = [];
    function travers(current) {
      if (current.left) travers(current.left);
      if (current.right) travers(current.right);
      visited.push(current.value);
    }
    travers(this.root);
    return visited;
  }

  dfsInOrder() {
    var visited = [];
    function travers(current) {
      if (current.left) travers(current.left);
      visited.push(current.value);
      if (current.right) travers(current.right);
    }
    travers(this.root);
    return visited;
  }
}

var bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log("pre " + bst.dfsPreOrder());
console.log("post " + bst.dfsPostOrder());
console.log("in " + bst.dfsInOrder());
