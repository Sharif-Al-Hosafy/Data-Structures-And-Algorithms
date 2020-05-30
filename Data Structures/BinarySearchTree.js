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
}
